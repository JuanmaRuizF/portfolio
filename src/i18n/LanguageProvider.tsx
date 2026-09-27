import { useState, useEffect, ReactNode } from "react";
import { translations, Language } from "./translations";
import { LanguageContext } from "./LanguageContext";

function detectBrowserLanguage(): Language {
	const browserLang = navigator.language.split("-")[0];
	if (browserLang === "es") return "es";
	return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>(() => {
		const stored = localStorage.getItem("portfolio-language");
		if (stored === "en" || stored === "es") return stored;
		return detectBrowserLanguage();
	});

	useEffect(() => {
		localStorage.setItem("portfolio-language", language);
		document.documentElement.lang = language;
	}, [language]);

	const t = translations[language];

	return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}
