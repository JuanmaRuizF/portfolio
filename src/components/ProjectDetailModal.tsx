import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import type { Project } from "@/data";

interface ProjectDetailModalProps {
	project: Project | null;
	isOpen: boolean;
	onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
	const { language, t } = useLanguage();
	const { toast } = useToast();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!project) return null;

	const shareUrl = `${window.location.origin}${window.location.pathname}?project=${project.id}`;

	const handleCopyLink = async () => {
		await navigator.clipboard.writeText(shareUrl);
		toast({
			title: "Link copied!",
			description: "Project URL has been copied to clipboard",
			duration: 1000,
		});
	};

	const nextImage = () => {
		if (project.images.length > 1) {
			setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
		}
	};

	const prevImage = () => {
		if (project.images.length > 1) {
			setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="max-w-4xl p-0 gap-0 bg-card border-border/50 overflow-hidden">
				<DialogTitle className="sr-only">{project.title[language]}</DialogTitle>

				{/* Header with close button - Always on top */}
				<div className="absolute top-4 right-4 z-50 flex gap-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={handleCopyLink}
						className="bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50"
					>
						<Share2 className="h-4 w-4" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={onClose}
						className="bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50"
					>
						<X className="h-4 w-4" />
					</Button>
				</div>

				<div className="max-h-[calc(100vh-8rem)] md:max-h-full overflow-y-auto md:overflow-y-visible">
					<div className="grid md:grid-cols-2">
						{/* Image Carousel */}
						<div className="relative h-64 md:h-full min-h-[300px] bg-secondary/30 overflow-hidden flex items-center justify-center">
							<AnimatePresence mode="wait">
								{project.images[currentImageIndex] ? (
									<motion.img
										key={currentImageIndex}
										src={project.images[currentImageIndex]}
										alt={`${project.title[language]} - Image ${currentImageIndex + 1}`}
										className="max-w-full max-h-full object-contain"
										initial={{ opacity: 0, scale: 1.1 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										transition={{ duration: 0.3 }}
									/>
								) : (
									<div className="absolute inset-0 flex items-center justify-center bg-grid">
										<span className="text-7xl font-display font-bold text-neon">
											{project.title[language].slice(0, 2).toUpperCase()}
										</span>
									</div>
								)}
							</AnimatePresence>

							{/* Scanlines overlay */}
							<div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

							{/* Gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card/80" />

							{/* Image Navigation */}
							{project.images.length > 1 && (
								<>
									<Button
										variant="ghost"
										size="icon"
										onClick={prevImage}
										className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50"
									>
										<ChevronLeft className="h-4 w-4" />
									</Button>
									<Button
										variant="ghost"
										size="icon"
										onClick={nextImage}
										className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50"
									>
										<ChevronRight className="h-4 w-4" />
									</Button>

									{/* Image Indicators */}
									<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
										{project.images.map((_, index) => (
											<button
												key={index}
												onClick={() => setCurrentImageIndex(index)}
												className={`w-8 h-1 transition-all ${
													index === currentImageIndex ? "bg-primary" : "bg-foreground/30 hover:bg-foreground/50"
												}`}
											/>
										))}
									</div>
								</>
							)}
						</div>

						{/* Content */}
						<div className="p-8 flex flex-col">
							<div className="mb-6">
								<span className="inline-block px-2 py-1 text-primary text-xs font-mono tracking-wider uppercase bg-primary/10 border border-primary/30 mb-4">
									{t.projects.projectDetails}
								</span>
								<h2 className="text-2xl font-display font-bold mb-3">{project.title[language]}</h2>
								<p className="text-sm text-muted-foreground leading-relaxed">{project.description[language]}</p>
								{project.longDescription?.[language] && (
									<>
										<div className="my-3 h-px bg-border/30" />
										<p className="text-sm text-muted-foreground/80 leading-relaxed">
											{project.longDescription[language]}
										</p>
									</>
								)}
							</div>

							{/* Technologies */}
							<div className="mb-6">
								<h3 className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-3 flex items-center gap-2">
									<span className="w-4 h-px bg-muted-foreground/50" />
									{t.projects.technologies}
								</h3>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-xs font-mono bg-secondary/50 text-foreground border border-border/30"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Links */}
							<div className="flex gap-3 mt-auto pt-6 border-t border-border/30">
								{project.liveUrl && (
									<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
										<Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs tracking-wider uppercase">
											<ExternalLink className="h-4 w-4" />
											{t.projects.viewLive}
										</Button>
									</a>
								)}
								{project.githubUrl && (
									<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
										<Button
											variant="outline"
											className="w-full gap-2 border-primary/50 text-primary hover:bg-primary/10 font-mono text-xs tracking-wider uppercase"
										>
											<Github className="h-4 w-4" />
											{t.projects.viewCode}
										</Button>
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
