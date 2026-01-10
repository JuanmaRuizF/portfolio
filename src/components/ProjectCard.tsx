import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Project } from "@/data";

interface ProjectCardProps {
	project: Project;
	index: number;
	onLearnMore: (project: Project) => void;
}

export function ProjectCard({ project, index, onLearnMore }: ProjectCardProps) {
	const { language, t } = useLanguage();

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			className="group card-retro overflow-hidden"
		>
			{/* Project Image */}
			<div className="relative h-48 bg-secondary/30 overflow-hidden">
				{project.images[0] ? (
					<img
						src={project.images[0]}
						alt={project.title[language]}
						className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
					/>
				) : (
					<div className="absolute inset-0 flex items-center justify-center bg-grid">
						<span className="text-5xl font-display font-bold text-neon">
							{project.title[language].slice(0, 2).toUpperCase()}
						</span>
					</div>
				)}

				{/* Overlay with scanlines */}
				<div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
				<div className="absolute inset-0 scanlines opacity-30" />

				{/* Quick links on hover */}
				<motion.div
					className="absolute top-4 right-4 flex gap-2"
					initial={{ opacity: 0, x: 10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3 }}
				>
					{project.liveUrl && (
						<motion.a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
						>
							<ExternalLink className="h-4 w-4" />
						</motion.a>
					)}
					{project.githubUrl && (
						<motion.a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
						>
							<Github className="h-4 w-4" />
						</motion.a>
					)}
				</motion.div>
			</div>

			{/* Project Info */}
			<div className="p-6 relative">
				<h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
					{project.title[language]}
				</h3>
				<p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
					{project.description[language]}
				</p>

				{/* Technologies */}
				<div className="flex flex-wrap gap-2 mb-6">
					{project.technologies.slice(0, 4).map((tech) => (
						<span
							key={tech}
							className="px-2 py-1 text-[10px] font-mono tracking-wider uppercase bg-secondary/50 text-muted-foreground border border-border/30"
						>
							{tech}
						</span>
					))}
					{project.technologies.length > 4 && (
						<span className="px-2 py-1 text-[10px] font-mono tracking-wider uppercase text-primary">
							+{project.technologies.length - 4}
						</span>
					)}
				</div>

				{/* Learn More */}
				<motion.button
					onClick={() => onLearnMore(project)}
					className="group/btn flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
					whileHover={{ x: 4 }}
				>
					<span>{t.projects.learnMore}</span>
					<ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
				</motion.button>
			</div>
		</motion.div>
	);
}
