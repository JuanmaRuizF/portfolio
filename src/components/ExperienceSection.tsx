import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { experiences, education, certifications } from "@/data";

type TabType = "experience" | "education" | "certifications";

export function ExperienceSection() {
	const { language, t } = useLanguage();
	const [activeTab, setActiveTab] = useState<TabType>("experience");

	return (
		<section id="experience" className="py-32 relative overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

			{/* Geometric decoration */}
			<motion.div
				animate={{ rotate: 360 }}
				transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
				className="absolute top-40 right-10 w-32 h-32 border border-primary/10 hidden lg:block"
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
						<span className="text-cosmic">{t.experience.title}</span>
					</h2>
				</motion.div>

				{/* Tabs */}
				<div className="flex justify-center gap-2 mb-16 flex-wrap">
					{[
						{ key: "experience" as TabType, label: t.experience.experienceTab, icon: Briefcase },
						{ key: "education" as TabType, label: t.experience.educationTab, icon: GraduationCap },
						{ key: "certifications" as TabType, label: t.experience.certificationsTab, icon: Award },
					].map(({ key, label, icon: Icon }) => (
						<motion.button
							key={key}
							onClick={() => setActiveTab(key)}
							className={`relative px-4 sm:px-6 py-3 font-mono text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all duration-300 border ${
								activeTab === key
									? "border-primary bg-primary/10 text-primary"
									: "border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
							}`}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<Icon className="h-4 w-4" />
							<span className="hidden sm:inline">{label}</span>
							{activeTab === key && (
								<motion.div
									layoutId="activeTab"
									className="absolute inset-0 border-2 border-primary pointer-events-none"
									transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
								/>
							)}
						</motion.button>
					))}
				</div>

				{/* Timeline */}
				<div className="max-w-3xl mx-auto">
					{activeTab === "experience" && (
						<div className="relative">
							{/* Timeline Line with glow */}
							<div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />
							<div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-primary/50 blur-sm md:-translate-x-1/2" />

							{experiences.map((exp, index) => (
								<motion.div
									key={exp.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
										index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
									}`}
								>
									{/* Timeline Dot with glow */}
									<div className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2">
										<div className="w-4 h-4 bg-primary border-4 border-background" />
										<div className="absolute inset-0 w-4 h-4 bg-primary/50 blur-md" />
									</div>

									<motion.div
										className={`card-retro p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
										whileHover={{ scale: 1.02 }}
										transition={{ duration: 0.3 }}
									>
										<span className="inline-block px-2 py-1 text-primary text-xs font-mono tracking-wider uppercase bg-primary/10 border border-primary/30 mb-3">
											{exp.period[language]}
										</span>
										<h3 className="text-lg font-display font-semibold mt-2">{exp.title[language]}</h3>
										<p className="text-muted-foreground text-sm mt-1 font-mono">
											{exp.company} · {exp.location[language]}
										</p>
										<ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
											{exp.description[language].map((item, i) => (
												<li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
													<ArrowRight
														className={`h-3 w-3 mt-1.5 text-primary/50 flex-shrink-0 ${
															index % 2 === 0 ? "md:order-last md:rotate-180" : ""
														}`}
													/>
													<span>{item}</span>
												</li>
											))}
										</ul>
										<div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
											{exp.technologies.map((tech) => (
												<span
													key={tech}
													className="px-2 py-1 text-[10px] font-mono tracking-wider uppercase bg-secondary/50 text-muted-foreground border border-border/30"
												>
													{tech}
												</span>
											))}
										</div>
									</motion.div>
								</motion.div>
							))}
						</div>
					)}

					{activeTab === "education" && (
						<div className="relative">
							{/* Timeline Line */}
							<div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-accent md:-translate-x-1/2" />
							<div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-accent/50 blur-sm md:-translate-x-1/2" />

							{education.map((edu, index) => (
								<motion.div
									key={edu.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
										index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
									}`}
								>
									{/* Timeline Dot */}
									<div className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2">
										<div className="w-4 h-4 bg-accent border-4 border-background" />
										<div className="absolute inset-0 w-4 h-4 bg-accent/50 blur-md" />
									</div>

									<motion.div
										className={`card-retro p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
										whileHover={{ scale: 1.02 }}
										transition={{ duration: 0.3 }}
									>
										<span className="inline-block px-2 py-1 text-accent text-xs font-mono tracking-wider uppercase bg-accent/10 border border-accent/30 mb-3">
											{edu.period}
										</span>
										<h3 className="text-lg font-display font-semibold mt-2">{edu.degree[language]}</h3>
										<p className="text-muted-foreground text-sm mt-1 font-mono">
											{edu.institution[language]} · {edu.location[language]}
										</p>
										<p className="text-muted-foreground text-sm mt-4">{edu.description[language]}</p>
									</motion.div>
								</motion.div>
							))}
						</div>
					)}

					{activeTab === "certifications" && (
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{certifications.map((cert, index) => (
								<motion.div
									key={cert.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="card-retro p-6 group"
								>
									<div className="flex items-start justify-between gap-4">
										<div className="p-2 bg-primary/10 border border-primary/30">
											<Award className="h-5 w-5 text-primary" />
										</div>
										<span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
									</div>
									<h3 className="text-base font-display font-semibold mt-4 group-hover:text-primary transition-colors">
										{cert.name[language]}
									</h3>
									<p className="text-muted-foreground text-sm mt-1 font-mono">{cert.issuer}</p>
									{cert.credlyUrl && (
										<a
											href={cert.credlyUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 mt-4 text-xs font-mono text-primary hover:text-accent transition-colors"
										>
											<ExternalLink className="h-3 w-3" />
											{t.experience.verifyCredential}
										</a>
									)}
								</motion.div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
