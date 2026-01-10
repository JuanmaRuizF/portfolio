import type { Education } from "./types";

export const education: Education[] = [
	{
		id: "edu-1",
		degree: {
			en: "Computer Science",
			es: "Ingeniería Informática",
		},
		institution: {
			en: "University of Las Palmas de Gran Canaria",
			es: "Universidad de Las Palmas de Gran Canaria",
		},
		location: {
			en: "Spain",
			es: "España",
		},
		period: "2017 - 2021",
		description: {
			en: "Specialization in Information Technologies. Graduated with honors (9.7/10) in the degree thesis.",
			es: "Especialización en Tecnologías de la Información. Matrícula de honor (9,7/10) en el Trabajo de Fin de Grado.",
		},
	},
	{
		id: "edu-2",
		degree: {
			en: "Computer Science",
			es: "Ingeniería Informática",
		},
		institution: {
			en: "AGH University of Science and Technology",
			es: "Universidad AGH de Ciencia y Tecnología",
		},
		location: {
			en: "Poland",
			es: "Polonia",
		},
		period: "2019 - 2020",
		description: {
			en: "Studied the third year of the degree in Krakow as part of the Erasmus+ program.",
			es: "Estudié el tercer año del grado en Cracovia como parte del programa Erasmus+.",
		},
	},
];
