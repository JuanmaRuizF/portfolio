import { createContext, useContext } from "react";
import { translations, Language } from "./translations";

type TranslationObject = typeof translations.en;

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: TranslationObject;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
