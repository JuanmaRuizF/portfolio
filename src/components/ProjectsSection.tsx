import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import { Project } from "@/data/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function ProjectsSection() {
	const { t } = useLanguage();
	const [searchParams, setSearchParams] = useSearchParams();
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	// Handle URL-based project opening
	useEffect(() => {
		const projectId = searchParams.get("project");
		if (projectId) {
			const project = projects.find((p) => p.id === projectId);
			if (project) {
				setSelectedProject(project);
			}
		}
	}, [searchParams]);

	const handleLearnMore = (project: Project) => {
		setSelectedProject(project);
		setSearchParams({ project: project.id });
	};

	const handleCloseModal = () => {
		setSelectedProject(null);
		setSearchParams({});
	};

	return (
		<section id="projects" className="py-32 relative overflow-hidden">
			{/* Background grid */}
			<div className="absolute inset-0 bg-grid opacity-30" />

			{/* Floating orbs */}
			<div className="orb w-[500px] h-[500px] bg-accent/10 top-0 right-0 animate-pulse-glow" />
			<div
				className="orb w-[400px] h-[400px] bg-primary/10 bottom-0 left-0 animate-pulse-glow"
				style={{ animationDelay: "1.5s" }}
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
						<span className="text-cosmic">{t.projects.title}</span>
					</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} onLearnMore={handleLearnMore} />
					))}
				</div>
			</div>

			<ProjectDetailModal project={selectedProject} isOpen={!!selectedProject} onClose={handleCloseModal} />
		</section>
	);
}
