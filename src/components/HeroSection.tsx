import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { cvLinks } from "@/data";
import { RetrowaveBackground } from "./RetrowaveBackground";

interface HeroSectionProps {
	onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
	const { language, t } = useLanguage();

	const handleDownloadCV = () => {
		const cvUrl = cvLinks[language];
		window.open(cvUrl, "_blank");
	};

	return (
		<section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Retrowave Background */}
			<RetrowaveBackground />

			<div className="section-container relative z-10 pt-20">
				<div className="text-center max-w-5xl mx-auto">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-wide px-4"
					>
						<span
							className="text-neon"
							style={{
								textShadow: "0 0 20px hsl(180 100% 50% / 0.4), 0 0 40px hsl(320 100% 60% / 0.2)",
							}}
						>
							{t.hero.name}
						</span>
					</motion.h1>

					<motion.div
						initial={{ opacity: 0, scaleX: 0 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="h-px w-48 mx-auto mb-6 bg-gradient-to-r from-transparent via-primary to-transparent"
					/>

					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.6 }}
						className="text-lg md:text-xl font-mono tracking-[0.2em] uppercase text-foreground/90 mb-8"
						style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
					>
						{t.hero.role}
					</motion.h2>

					{/* <motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.6 }}
						className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed"
					>
						{t.hero.description}
					</motion.p> */}

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.6 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
						style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.6))" }}
					>
						<Button
							onClick={handleDownloadCV}
							className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm font-mono tracking-wider uppercase"
						>
							<span className="relative z-10 flex items-center gap-2">
								<Download className="h-4 w-4" />
								{t.hero.downloadCV}
							</span>
							<div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
						</Button>
						<Button
							variant="outline"
							onClick={onContactClick}
							className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-8 py-6 text-sm font-mono tracking-wider uppercase backdrop-blur-sm"
						>
							<Mail className="h-4 w-4" />
							{t.hero.contact}
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
