import type { Experience } from "./types";

export const experiences: Experience[] = [
	{
		id: "exp-1",
		title: {
			en: "Software Developer",
			es: "Desarrollador de Software",
		},
		company: "Arup",
		location: {
			en: "Madrid, Spain",
			es: "Madrid, España",
		},
		period: {
			en: "07/2022 - Present",
			es: "07/2022 - Actualidad",
		},
		description: {
			en: [
				"Developed the d.Hub platform at Arup, a modular product for asset management used in projects with clients such as Inditex, Adif, and AWS.",
				"Created a platform for processing, analysis, and visualization of various airports in Spain for Aena.",
				"Deployed a metadata management platform for BSC (Barcelona Supercomputing Center).",
			],
			es: [
				"Desarrollo de la plataforma d.Hub de Arup, un producto modular para la gestión de activos utilizado en proyectos con clientes como Inditex, Adif y AWS.",
				"Creación de una plataforma para el procesamiento, análisis y visualización de varios aeropuertos en España para Aena.",
				"Despliegue de plataforma de gestion de metadatos para el BSC (Barcelona Supercomputing Center).",
			],
		},
		technologies: ["AWS", "React", "Node.js", "Git", "TypeScript", "Python", "Docker", "Kubernetes", "PostgreSQL"],
	},
	{
		id: "exp-2",
		title: {
			en: "Software Developer (Internship)",
			es: "Desarrollador de software (prácticas)",
		},
		company: "Secret Source",
		location: {
			en: "Gran Canaria, Spain",
			es: "Gran Canaria, España",
		},
		period: {
			en: "09/2020 - 12/2020",
			es: "09/2020 - 12/2020",
		},
		description: {
			en: [
				"Expanded a client's website in the United Kingdom by adding new features and improving the user experience.",
			],
			es: [
				"Expandir el sitio web de un cliente en el Reino Unido, añadiendo nuevas funcionalidades y mejorando la experiencia de usuario.",
			],
		},
		technologies: ["React", "Node.js", "TypeScript", "Git"],
	},
];
