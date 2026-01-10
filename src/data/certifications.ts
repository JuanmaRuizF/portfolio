import type { Certification } from "./types";

export const certifications: Certification[] = [
	{
		id: "cert-1",
		name: {
			en: "AWS Solutions Architect Associate",
			es: "AWS Solutions Architect Associate",
		},
		issuer: "Amazon Web Services",
		date: "2025",
		credlyUrl: "https://www.credly.com/badges/358c34b7-2cc5-4ea8-9e3c-aa874c274d66/public_url",
	},
	{
		id: "cert-2",
		name: {
			en: "MongoDB Associate Developer",
			es: "MongoDB Associate Developer",
		},
		issuer: "MongoDB",
		date: "2024",
		credlyUrl: "https://www.credly.com/badges/df560da2-a5e1-4bac-bff7-68e600a0e5d1/public_url",
	},
];
