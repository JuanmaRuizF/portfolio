import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { techSkills, techCategories, type TechCategory } from "@/data";
import { TechIcon } from "./TechIcon";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20, scale: 0.9 },
	show: { opacity: 1, y: 0, scale: 1 },
};

export function SkillsSection() {
	const { language, t } = useLanguage();

	const getSkillsByCategory = (category: TechCategory) => {
		return techSkills.filter((skill) => skill.category === category);
	};

	return (
		<section id="skills" className="py-32 relative overflow-hidden">
			{/* Background grid */}
			<div className="absolute inset-0 bg-grid opacity-50" />

			{/* Floating orbs */}
			<div className="orb w-[400px] h-[400px] bg-primary/10 -top-40 -right-40 animate-pulse-glow" />
			<div
				className="orb w-[300px] h-[300px] bg-accent/10 -bottom-20 -left-20 animate-pulse-glow"
				style={{ animationDelay: "2s" }}
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
						<span className="text-cosmic">{t.skills.title}</span>
					</h2>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
					{/* Tech Stack */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-4 mb-8">
							<div className="w-3 h-3 bg-primary animate-pulse" />
							<h3 className="text-xl font-mono font-medium text-primary">{t.skills.techStack}</h3>
							<span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
						</div>

						<div className="space-y-8">
							{techCategories.map((category) => {
								const skills = getSkillsByCategory(category.key);
								if (skills.length === 0) return null;

								return (
									<motion.div
										key={category.key}
										variants={container}
										initial="hidden"
										whileInView="show"
										viewport={{ once: true }}
									>
										<h4 className="text-xs font-mono text-muted-foreground mb-4 tracking-[0.15em] uppercase flex items-center gap-2">
											<span className="w-4 h-px bg-muted-foreground/50" />
											{category.label[language]}
										</h4>
										<div className="flex flex-wrap gap-2">
											{skills.map((skill) => (
												<motion.div
													key={skill.name}
													variants={item}
													whileHover={{ scale: 1.05, y: -2 }}
													className="group relative px-4 py-3 bg-card/80 border border-border/50 flex items-center gap-3 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
												>
													<TechIcon
														icon={skill.icon}
														className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors"
													/>
													<span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
														{skill.name}
													</span>
													{/* Hover glow effect */}
													<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
														<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
													</div>
												</motion.div>
											))}
										</div>
									</motion.div>
								);
							})}
						</div>
					</motion.div>

					{/* Soft Skills */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-4 mb-8">
							<div className="w-3 h-3 bg-accent animate-pulse" />
							<h3 className="text-xl font-mono font-medium text-accent">{t.skills.softSkills}</h3>
							<span className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
						</div>

						<motion.div
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className="grid grid-cols-1 sm:grid-cols-2 gap-3"
						>
							{t.skills.softSkillsList.map((skill, index) => (
								<motion.div
									key={index}
									variants={item}
									whileHover={{ scale: 1.02, x: 4 }}
									className="group px-5 py-4 bg-card/80 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default"
								>
									<div className="flex items-center gap-3">
										<span className="text-accent/50 font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
										<span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
											{skill}
										</span>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
