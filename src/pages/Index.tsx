import { useState } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactModal } from "@/components/ContactModal";

const Index = () => {
	const [isContactOpen, setIsContactOpen] = useState(false);

	return (
		<LanguageProvider>
			<div className="min-h-screen bg-background">
				<Navigation />
				<main>
					<HeroSection onContactClick={() => setIsContactOpen(true)} />
					<AboutSection />
					<SkillsSection />
					<ExperienceSection />
					<ProjectsSection />
				</main>
				<ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
			</div>
		</LanguageProvider>
	);
};

export default Index;
