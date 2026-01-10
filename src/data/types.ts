export type TechCategory = "frontend" | "backend" | "database" | "devops" | "datascience" | "cloud";

export interface TechSkill {
	name: string;
	icon: string;
	category: TechCategory;
}

export interface TechCategoryInfo {
	key: TechCategory;
	label: {
		en: string;
		es: string;
	};
}

export interface Experience {
	id: string;
	title: {
		en: string;
		es: string;
	};
	company: string;
	location: {
		en: string;
		es: string;
	};
	period: {
		en: string;
		es: string;
	};
	description: {
		en: string[];
		es: string[];
	};
	technologies: string[];
}

export interface Education {
	id: string;
	degree: {
		en: string;
		es: string;
	};
	institution: {
		en: string;
		es: string;
	};
	location: {
		en: string;
		es: string;
	};
	period: string;
	description: {
		en: string;
		es: string;
	};
}

export interface Certification {
	id: string;
	name: {
		en: string;
		es: string;
	};
	issuer: string;
	date: string;
	credlyUrl?: string;
}

export interface Project {
	id: string;
	title: {
		en: string;
		es: string;
	};
	description: {
		en: string;
		es: string;
	};
	longDescription: {
		en: string;
		es: string;
	};
	images: string[];
	technologies: string[];
	liveUrl?: string;
	githubUrl?: string;
}
