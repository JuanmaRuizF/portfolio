import { motion } from "framer-motion";

export function RetrowaveBackground() {
	return (
		<div className="absolute inset-0 overflow-hidden">
			{/* Base layer - dark blue/purple for the bottom half */}
			<div className="absolute inset-0 bg-[#0d0d2b]" />

			{/* Sky gradient - compact sunset band in the middle */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-[#cc4400] via-45% via-[#e61560] via-50% to-transparent to-55% opacity-70" />

			{/* Top sky - violet to dark blue night sky */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] from-0% via-[#2d1b4e] via-30% to-transparent to-50%" />

			{/* Sun */}
			<div className="absolute left-1/2 -translate-x-1/2 bottom-[38%] w-[220px] h-[220px] md:w-[300px] md:h-[300px]">
				{/* Sun glow */}
				<div className="absolute inset-0 rounded-full bg-gradient-to-b from-[hsl(50,100%,70%)] via-[hsl(30,100%,55%)] to-[hsl(320,100%,50%)] blur-xl opacity-80" />
				{/* Sun body */}
				<div className="absolute inset-4 rounded-full bg-gradient-to-b from-[hsl(50,100%,75%)] via-[hsl(40,100%,60%)] to-[hsl(320,100%,55%)] overflow-hidden">
					{/* Sun horizontal lines/bands */}
					{/* <div className="absolute left-0 right-0 bottom-0 h-[35%] flex flex-col justify-end">
						{[...Array(6)].map((_, i) => (
							<div
								key={i}
								className="bg-[hsl(280,60%,15%)]"
								style={{
									height: `${3 + i * 1.5}px`,
									marginBottom: `${8 + i * 2}px`,
								}}
							/>
						))}
					</div> */}
				</div>
			</div>

			{/* Left Mountain Range */}
			{/* <svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 600 250"
				className="absolute left-0 bottom-[50%] w-[50%] h-auto z-[5]"
				preserveAspectRatio="xMinYMax meet"
			> */}
			{/* Background layer - lighter purple */}
			{/* <path
					d="M0,250 L0,170 L30,168 L50,155 L65,165 L75,145 L88,150 L100,130 L115,138 L128,120 L145,125 L160,115 L178,118 L195,110 L210,115 L225,112 L240,118 L255,125 L275,135 L295,148 L318,165 L345,185 L378,205 L415,222 L458,235 L505,244 L555,248 L600,249 L600,250 Z"
					fill="#1a0a3e"
					stroke="#5a3d9a"
					strokeWidth="1"
					opacity="0.6"
				/> */}

			{/* Middle layer - medium purple */}
			{/* <path
					d="M0,250 L0,180 L25,178 L42,168 L55,175 L68,158 L82,165 L95,148 L110,155 L125,138 L142,145 L158,132 L175,137 L192,128 L210,133 L228,130 L245,136 L262,143 L282,153 L305,168 L330,185 L360,202 L395,218 L435,232 L480,243 L530,247 L580,249 L600,250 L600,250 Z"
					fill="#280a5e"
					stroke="#7a5db0"
					strokeWidth="1.5"
					opacity="0.75"
				/> */}

			{/* Foreground layer - darkest, most detailed */}
			{/* <path
					d="M0,250 L0,185 L20,183 L35,175 L48,182 L60,168 L73,175 L85,160 L98,168 L112,152 L128,160 L145,148 L162,153 L180,145 L198,150 L216,147 L234,153 L252,162 L272,175 L295,190 L322,206 L352,221 L388,234 L428,244 L475,248 L525,250 L575,250 L600,250 L600,250 Z"
					fill="#0d0527"
					stroke="#d946ef"
					strokeWidth="2"
					opacity="0.9"
				>
					<animate attributeName="stroke" values="#d946ef;#f0abfc;#d946ef" dur="3s" repeatCount="indefinite" />
				</path>
			</svg> */}

			{/* Right Mountain Range */}

			{/* Perspective grid floor */}
			<div className="absolute bottom-0 left-0 right-0 h-[50%] overflow-hidden">
				{/* Grid container with perspective */}
				<div
					className="absolute inset-0"
					style={{
						perspective: "400px",
						perspectiveOrigin: "50% 0%",
					}}
				>
					<div
						className="absolute inset-0 origin-top"
						style={{
							transform: "rotateX(80deg)",
							backgroundImage: `
                linear-gradient(to right, hsl(195, 100%, 65%, 0.7) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(195, 100%, 65%, 0.7) 1px, transparent 1px)
              `,
							backgroundSize: "40px 40px",
						}}
					/>
					{/* Horizon glow */}
					<div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[hsl(320,100%,50%,0.6)] to-transparent blur-sm z-10" />
				</div>
			</div>

			{/* Floating stars */}
			<motion.div
				animate={{ opacity: [0.3, 0.8, 0.3] }}
				transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
				className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full"
			/>
			<motion.div
				animate={{ opacity: [0.5, 1, 0.5] }}
				transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
				className="absolute top-[15%] right-[25%] w-1.5 h-1.5 bg-white rounded-full"
			/>
			<motion.div
				animate={{ opacity: [0.4, 0.9, 0.4] }}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
				className="absolute top-[8%] right-[40%] w-1 h-1 bg-white rounded-full"
			/>
			<motion.div
				animate={{ opacity: [0.3, 0.7, 0.3] }}
				transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
				className="absolute top-[20%] left-[35%] w-0.5 h-0.5 bg-white rounded-full"
			/>
		</div>
	);
}
