import type { TechSkill, TechCategoryInfo } from "./types";

export const techCategories: TechCategoryInfo[] = [
	{ key: "cloud", label: { en: "Cloud", es: "Cloud" } },
	{ key: "datascience", label: { en: "Data Science", es: "Ciencia de Datos" } },
	{ key: "devops", label: { en: "DevOps", es: "DevOps" } },
	{ key: "frontend", label: { en: "Frontend", es: "Frontend" } },
	{ key: "backend", label: { en: "Backend", es: "Backend" } },
	{ key: "database", label: { en: "Databases", es: "Bases de Datos" } },
];

export const techSkills: TechSkill[] = [
	// Cloud
	{ name: "AWS", icon: "aws", category: "cloud" },
	{ name: "Azure", icon: "azure", category: "cloud" },

	// Data Science
	{ name: "Python", icon: "python", category: "datascience" },
	{ name: "Spark", icon: "spark", category: "datascience" },

	// DevOps
	{ name: "Docker", icon: "docker", category: "devops" },
	{ name: "Kubernetes", icon: "kubernetes", category: "devops" },
	{ name: "Git", icon: "git", category: "devops" },

	// Frontend
	{ name: "TypeScript", icon: "typescript", category: "frontend" },
	{ name: "React", icon: "react", category: "frontend" },
	{ name: "Tailwind", icon: "tailwind", category: "frontend" },
	{ name: "TanStack", icon: "tanstack", category: "frontend" },

	// Backend
	{ name: "Node.js", icon: "nodejs", category: "backend" },
	{ name: "Express", icon: "express", category: "backend" },
	{ name: "Kafka", icon: "kafka", category: "backend" },
	{ name: "Knex.js", icon: "knexjs", category: "backend" },

	// Database
	{ name: "PostgreSQL", icon: "postgresql", category: "database" },
	{ name: "MongoDB", icon: "mongodb", category: "database" },
];
