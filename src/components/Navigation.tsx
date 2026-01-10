import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const navItems = ["home", "about", "skills", "experience", "projects"] as const;

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLangOpen, setIsLangOpen] = useState(false);
	const langRefDesktop = useRef<HTMLDivElement>(null);
	const langRefMobile = useRef<HTMLDivElement>(null);
	const { language, setLanguage, t } = useLanguage();

	// Close language dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				langRefDesktop.current &&
				!langRefDesktop.current.contains(event.target as Node) &&
				langRefMobile.current &&
				!langRefMobile.current.contains(event.target as Node)
			) {
				setIsLangOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsOpen(false);
		}
	};

	const selectLanguage = (lang: "en" | "es") => {
		setLanguage(lang);
		setIsLangOpen(false);
	};

	const languages = [
		{ code: "en" as const, label: "English", flag: "🇬🇧" },
		{ code: "es" as const, label: "Español", flag: "🇪🇸" },
	];

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30"
		>
			{/* Top accent line */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

			<nav className="section-container flex items-center justify-between h-16">
				<motion.button
					onClick={() => scrollToSection("home")}
					className="text-xl font-mono font-bold text-neon tracking-tight"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					{"<JRF/>"}
				</motion.button>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-1">
					{navItems.map((item) => (
						<motion.button
							key={item}
							onClick={() => scrollToSection(item)}
							className="relative px-4 py-2 text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors group"
							whileHover={{ y: -2 }}
						>
							{t.nav[item]}
							<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
						</motion.button>
					))}
					<div className="ml-4 pl-4 border-l border-border/50 relative" ref={langRefDesktop}>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsLangOpen(!isLangOpen)}
							className="text-muted-foreground hover:text-primary hover:bg-primary/10"
						>
							<Globe className="h-4 w-4" />
							<span className="sr-only">Select language</span>
						</Button>

						{/* Language Dropdown */}
						<AnimatePresence>
							{isLangOpen && (
								<motion.div
									initial={{ opacity: 0, y: -10, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: -10, scale: 0.95 }}
									transition={{ duration: 0.15 }}
									className="absolute top-full right-0 mt-2 py-1 bg-card/95 backdrop-blur-xl border border-border/50 shadow-lg min-w-[140px]"
								>
									{languages.map((lang) => (
										<button
											key={lang.code}
											onClick={() => selectLanguage(lang.code)}
											className={`w-full px-3 py-2 text-left text-sm font-mono flex items-center gap-3 transition-colors ${
												language === lang.code
													? "text-primary bg-primary/10"
													: "text-muted-foreground hover:text-foreground hover:bg-primary/5"
											}`}
										>
											<span>{lang.flag}</span>
											<span className="flex-1">{lang.label}</span>
											{language === lang.code && <Check className="h-3 w-3 text-primary" />}
										</button>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex md:hidden items-center gap-2">
					<div className="relative" ref={langRefMobile}>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsLangOpen(!isLangOpen)}
							className="text-muted-foreground hover:text-primary"
						>
							<Globe className="h-4 w-4" />
						</Button>

						{/* Mobile Language Dropdown */}
						<AnimatePresence>
							{isLangOpen && (
								<motion.div
									initial={{ opacity: 0, y: -10, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: -10, scale: 0.95 }}
									transition={{ duration: 0.15 }}
									className="absolute top-full right-0 mt-2 py-1 bg-card/95 backdrop-blur-xl border border-border/50 shadow-lg min-w-[140px] z-50"
								>
									{languages.map((lang) => (
										<button
											key={lang.code}
											onClick={() => selectLanguage(lang.code)}
											className={`w-full px-3 py-2 text-left text-sm font-mono flex items-center gap-3 transition-colors ${
												language === lang.code
													? "text-primary bg-primary/10"
													: "text-muted-foreground hover:text-foreground hover:bg-primary/5"
											}`}
										>
											<span>{lang.flag}</span>
											<span className="flex-1">{lang.label}</span>
											{language === lang.code && <Check className="h-3 w-3 text-primary" />}
										</button>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsOpen(!isOpen)}
						className="text-muted-foreground hover:text-primary"
					>
						{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</Button>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 overflow-hidden"
					>
						<div className="section-container py-6 flex flex-col gap-1">
							{navItems.map((item, index) => (
								<motion.button
									key={item}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.05 }}
									type="button"
									className="text-left px-4 py-3 text-sm font-mono tracking-wider uppercase text-muted-foreground hover:text-primary hover:bg-primary/5 border-l-2 border-transparent hover:border-primary transition-all cursor-pointer"
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										scrollToSection(item);
									}}
								>
									{t.nav[item]}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
