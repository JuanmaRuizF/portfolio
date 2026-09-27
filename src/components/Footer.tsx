import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { roqueNublo, teide, type PeakShape } from "./CanaryPeaks.shapes";

/** A small static silhouette echoing the hero, sized by height so it stays visible on phones. */
function Peak({ shape }: { shape: PeakShape }) {
	const ridge = `M${shape.points.map(([x, y]) => `${x},${y}`).join(" L")}`;
	return (
		<svg viewBox={`0 0 ${shape.width} ${shape.height}`} className="h-8 md:h-14 w-auto" aria-hidden="true">
			<path d={`${ridge} L${shape.width},${shape.height} L0,${shape.height} Z`} fill="url(#footer-peak-fill)" />
			<path
				d={ridge}
				fill="none"
				stroke="hsl(320, 100%, 65%)"
				strokeOpacity={0.7}
				strokeWidth={1.25}
				strokeLinejoin="round"
				vectorEffect="non-scaling-stroke"
			/>
		</svg>
	);
}

interface FooterProps {
	onContactClick: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
	const { t } = useLanguage();

	return (
		<footer className="relative mt-16">
			{/* Teide and Roque Nublo on a full-width horizon, aligned with the content edges */}
			<svg width="0" height="0" className="absolute" aria-hidden="true">
				<defs>
					<linearGradient id="footer-peak-fill" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#140833" />
						<stop offset="100%" stopColor="#2a0c45" />
					</linearGradient>
				</defs>
			</svg>
			<div className="section-container flex items-end justify-between">
				<Peak shape={teide} />
				<Peak shape={roqueNublo} />
			</div>
			<div className="h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
			<div className="h-8 bg-gradient-to-b from-accent/10 to-transparent" />

			<div className="section-container pb-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 text-center md:text-left"
				>
					<div>
						<h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
							<span className="text-cosmic">{t.contact.title}</span>
						</h2>
						<p className="text-muted-foreground max-w-md">{t.contact.description}</p>
					</div>

					<Button
						onClick={onContactClick}
						className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-5 text-sm font-mono tracking-wider uppercase"
					>
						<Mail className="h-4 w-4" />
						{t.hero.contact}
					</Button>
				</motion.div>

				<div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
					<p className="text-center sm:text-left">
						© {new Date().getFullYear()} {t.hero.name}
					</p>
					<button
						onClick={() => document.getElementById("home")?.scrollIntoView()}
						className="flex items-center gap-2 uppercase tracking-wider hover:text-primary transition-colors"
					>
						{t.footer.backToTop}
						<ArrowUp className="h-3 w-3" />
					</button>
				</div>
			</div>
		</footer>
	);
}
