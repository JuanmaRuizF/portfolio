import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { roqueNublo, teide, type PeakShape } from "./CanaryPeaks.shapes";

type Point = [number, number];

interface Sweep {
	id: number;
	reverse: boolean;
}

// The sea between the islands, as a fraction of the width.
const GAP_RATIO = 0.14;
const MIN_GAP = 48;
const MAX_GAP = 320;
// Each peak may take at most this many times the sky height in width, so they stay low on ultra-wide screens.
const MAX_WIDTH_TO_SKY = 1.8;
// On phones, peaks keep this width and grow past the outer screen edge instead of shrinking further.
const MIN_PEAK_WIDTH = 250;

const SWEEP_SPEED = 700; // px per second
const SWEEP_LAYERS = [
	{ stroke: "hsl(195, 100%, 65%)", width: 5, opacity: 0.45 },
	{ stroke: "hsl(185, 100%, 88%)", width: 1.5, opacity: 1 },
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

/** Maps a peak's points to screen space, with its bottom-left corner at (x0, horizon). */
function place(shape: PeakShape, width: number, x0: number, horizon: number): Point[] {
	const scale = width / shape.width;
	return shape.points.map(([x, y]) => [x0 + x * scale, horizon - (shape.height - y) * scale]);
}

function layout(W: number, H: number) {
	const horizon = H / 2;
	const gap = clamp(W * GAP_RATIO, MIN_GAP, MAX_GAP);
	// Both peaks end on the horizon at the same distance from the centre, so the gap is always symmetric.
	const reach = Math.min(W / 2 - gap / 2, horizon * MAX_WIDTH_TO_SKY);
	const widthFor = (shape: PeakShape) => Math.min(Math.max(reach, MIN_PEAK_WIDTH), reach / (1 - shape.maxCrop));

	const teideWidth = widthFor(teide);
	const nubloWidth = widthFor(roqueNublo);
	const left = place(teide, teideWidth, reach - teideWidth, horizon);
	const right = place(roqueNublo, nubloWidth, W - reach, horizon);

	return {
		left,
		right,
		leftFill: `${toPath(left)} L${round(reach - teideWidth)},${round(horizon)} Z`,
		rightFill: `${toPath(right)} L${round(W - reach + nubloWidth)},${round(horizon)} Z`,
		// Teide's ridge ends and Roque Nublo's starts on the horizon, so joining them runs the light along it.
		sweepPath: toPath([...left, ...right]),
		sweepLength: pathLength([...left, ...right]),
	};
}

const round = (n: number) => Math.round(n * 10) / 10;
const toPath = (points: Point[]) => "M" + points.map(([x, y]) => `${round(x)},${round(y)}`).join(" L");
const pathLength = (points: Point[]) =>
	points.slice(1).reduce((sum, [x, y], i) => sum + Math.hypot(x - points[i][0], y - points[i][1]), 0);
const sweepDuration = (length: number) => clamp(length / SWEEP_SPEED, 2.2, 4.5);

function Ridge({ points }: { points: Point[] }) {
	const d = toPath(points);
	return (
		<>
			<path
				d={d}
				fill="none"
				stroke="hsl(320, 100%, 60%)"
				strokeOpacity={0.25}
				strokeWidth={5}
				strokeLinejoin="round"
			/>
			<path
				d={d}
				fill="none"
				stroke="hsl(320, 100%, 65%)"
				strokeOpacity={0.85}
				strokeWidth={1.25}
				strokeLinejoin="round"
			/>
		</>
	);
}

export function CanaryPeaks() {
	const reduceMotion = useReducedMotion();
	const svgRef = useRef<SVGSVGElement>(null);
	const [size, setSize] = useState<{ width: number; height: number }>();
	const [sweep, setSweep] = useState<Sweep>();

	useLayoutEffect(() => {
		const svg = svgRef.current;
		if (!svg) return;
		const measure = () => {
			const { width, height } = svg.getBoundingClientRect();
			setSize({ width, height });
		};
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(svg);
		return () => observer.disconnect();
	}, []);

	const scene = size && layout(size.width, size.height);
	const length = scene?.sweepLength ?? 0;
	const sweepLength = useRef(length); // read by the scheduler to time the next sweep
	sweepLength.current = length;

	useEffect(() => {
		if (reduceMotion) return;

		let id = 0;
		let timeout: ReturnType<typeof setTimeout>;

		// One sweep across both peaks, in a random direction, then a 2.5–5.5s pause.
		const schedule = (delay: number) => {
			timeout = setTimeout(() => {
				setSweep({ id: id++, reverse: Math.random() < 0.5 });
				schedule(sweepDuration(sweepLength.current) * 1000 + 2500 + Math.random() * 3000);
			}, delay);
		};

		schedule(1200);
		return () => clearTimeout(timeout);
	}, [reduceMotion]);

	// Dash offsets that park the lit segment just before the start / just after the end of the path.
	const dash = size ? clamp(size.width * 0.065, 40, 120) : 0;
	const pad = SWEEP_LAYERS[0].width;
	const hiddenBefore = dash + pad;
	const hiddenAfter = -(length + pad);

	return (
		// No viewBox: user units are CSS px, so the drawing is never rescaled, only re-laid out on resize.
		<svg ref={svgRef} className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
			{scene && (
				<>
					<defs>
						<linearGradient id="peak-fill" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#140833" />
							<stop offset="70%" stopColor="#1f0b40" />
							<stop offset="100%" stopColor="#3b0f52" />
						</linearGradient>
					</defs>

					{/* Silhouettes with their neon ridge lines */}
					<path d={scene.leftFill} fill="url(#peak-fill)" />
					<Ridge points={scene.left} />
					<path d={scene.rightFill} fill="url(#peak-fill)" />
					<Ridge points={scene.right} />

					{/* Light sweeping from one peak to the other along the horizon */}
					{sweep &&
						SWEEP_LAYERS.map((layer) => (
							<motion.path
								key={`${sweep.id}-${layer.width}`}
								d={scene.sweepPath}
								fill="none"
								stroke={layer.stroke}
								strokeWidth={layer.width}
								strokeOpacity={layer.opacity}
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeDasharray={`${dash} ${length + dash + 2 * pad}`}
								initial={{ strokeDashoffset: sweep.reverse ? hiddenAfter : hiddenBefore }}
								animate={{ strokeDashoffset: sweep.reverse ? hiddenBefore : hiddenAfter }}
								transition={{ duration: sweepDuration(length), ease: [0.45, 0.05, 0.55, 0.95] }}
							/>
						))}
				</>
			)}
		</svg>
	);
}
