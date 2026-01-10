import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import profileImage from "@/assets/personal-image.jpeg";

export function AboutSection() {
	const { t } = useLanguage();

	return (
		<section id="about" className="py-32 relative overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

			{/* Floating geometric shapes */}
			<motion.div
				animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				className="absolute top-20 right-20 w-20 h-20 border-2 border-accent/20 geo-diamond hidden lg:block"
			/>
			<motion.div
				animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				className="absolute bottom-20 left-20 w-16 h-16 bg-primary/5 border border-primary/20 hidden lg:block"
			/>

			<div className="section-container relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter">
						<span className="text-cosmic">{t.about.title}</span>
					</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						viewport={{ once: true }}
						className="relative order-1 md:order-1"
					>
						<div className="aspect-square max-w-sm mx-auto relative">
							{/* Retro frame with neon borders */}
							<div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
							<div className="absolute -inset-4 border border-primary/30" />
							<div className="absolute -inset-8 border border-accent/10 hidden md:block" />

							{/* Scanlines overlay */}
							<div className="absolute inset-0 scanlines" />

							{/* Main content */}
							<div className="relative w-full h-full bg-card border border-border/50 flex items-center justify-center overflow-hidden">
								{/* Profile image */}
								<img
									src={profileImage}
									alt="Profile"
									className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
								/>
								{/* Overlay gradient for retro effect */}
								<div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
							</div>

							{/* Corner brackets */}
							<div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary" />
							<div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary" />
							<div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-accent" />
							<div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-accent" />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.3 }}
						viewport={{ once: true }}
						className="order-2 md:order-2"
					>
						<div className="space-y-6">
							{t.about.description.split("\n\n").map((paragraph, index) => (
								<p key={index} className="text-muted-foreground text-base md:text-lg leading-relaxed">
									{paragraph}
								</p>
							))}
						</div>

						{/* Decorative line */}
						<div className="mt-8 flex items-center gap-4">
							<span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
							<span className="w-3 h-3 border border-primary/50 rotate-45" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
