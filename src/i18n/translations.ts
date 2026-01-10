export const translations = {
	en: {
		nav: {
			home: "Home",
			about: "About",
			skills: "Skills",
			experience: "Experience",
			projects: "Projects",
			contact: "Contact",
		},
		hero: {
			name: "Juan Manuel Ruiz Fránquiz",
			role: "Software Developer",
			description:
				"Building elegant solutions with modern technologies. Passionate about clean code and great user experiences.",
			downloadCV: "Download CV",
			contact: "Contact",
		},
		about: {
			title: "About Me",
			subtitle: "Get to know me",
			description: `
                        I am a computer engineer, born and raised in Gran Canaria, Spain. After completing my university studies, I moved to Madrid, where I currently work professionally.

I have a broad vision of software development, participating in the full lifecycle of solutions: planning, architecture, implementation, deployment, and maintenance. I have worked on data science projects as well as frontend and backend applications, always with a practical approach focused on solving real problems.

My main areas of interest are solution architecture, cloud computing, and data science. Curiosity and adaptability are the pillars with which I tackle new concepts, technologies, and challenges, always aiming to generate impact and add value to the systems I develop.
`,
		},
		skills: {
			title: "Skills",
			subtitle: "My technical toolkit",
			techStack: "Tech Stack",
			softSkills: "Soft Skills",
			softSkillsList: [
				"Adaptability",
				"Teamwork",
				"Communication",
				"Creativity",
				"Problem Solving",
				"Continuous Learning",
			],
		},
		experience: {
			title: "Experience & Education",
			subtitle: "My professional journey",
			experienceTab: "Experience",
			educationTab: "Education",
			certificationsTab: "Certifications",
			verifyCredential: "Verify",
		},
		projects: {
			title: "Projects",
			subtitle: "Some things I've built",
			viewProject: "View Project",
			viewCode: "View Code",
			viewLive: "View Live",
			learnMore: "Learn More",
			close: "Close",
			projectDetails: "Project Details",
			technologies: "Technologies",
		},
		contact: {
			title: "Get in Touch",
			subtitle: "Let's connect",
			description: "Have a question or want to work together? Feel free to reach out!",
			name: "Name",
			email: "Email",
			message: "Message",
			send: "Send Message",
			sending: "Sending...",
			success: "Message sent successfully!",
			error: "Failed to send message. Please try again.",
			successTitle: "Message sent!",
			successDescription: "Your message has been sent successfully.",
			errorTitle: "Error",
			errorDescription: "Failed to send message. Please try again or use the email link.",
			namePlaceholder: "Your name",
			emailPlaceholder: "your@email.com",
			messagePlaceholder: "Your message...",
			copyEmail: "Copy",
			copied: "Copied!",
			back: "Back",
		},
		footer: {
			rights: "All rights reserved.",
			madeWith: "Made with",
		},
	},
	es: {
		nav: {
			home: "Inicio",
			about: "Sobre mí",
			skills: "Habilidades",
			experience: "Experiencia",
			projects: "Proyectos",
			contact: "Contacto",
		},
		hero: {
			name: "Juan Manuel Ruiz Fránquiz",
			role: "Desarrollador de Software",
			description:
				"Construyendo soluciones elegantes con tecnologías modernas. Apasionado por el código limpio y las excelentes experiencias de usuario.",
			downloadCV: "Descargar CV",
			contact: "Contacto",
		},
		about: {
			title: "Sobre Mí",
			subtitle: "Conóceme",
			description: `
                        Soy ingeniero informático, nacido y criado en Gran Canaria, España. Tras completar mi formación universitaria, me trasladé a Madrid, donde actualmente desarrollo mi carrera profesional.

Cuento con una visión transversal del desarrollo de software, participando en todo el ciclo de vida de las soluciones: planificación, arquitectura, implementación, despliegue y evolución en producción. He trabajado en proyectos de ciencia de datos y aplicaciones frontend y backend, con un enfoque práctico orientado a resolver problemas reales.

Mis principales áreas de interés son la arquitectura de soluciones, la computación en la nube y la ciencia de datos. La curiosidad y la capacidad de adaptación son los pilares con los que afronto nuevos retos, buscando siempre generar impacto y aportar valor en los sistemas que desarrollo.
                        `,
		},
		skills: {
			title: "Habilidades",
			subtitle: "Mi kit de herramientas técnico",
			techStack: "Stack Tecnológico",
			softSkills: "Habilidades Blandas",
			softSkillsList: [
				"Adaptabilidad",
				"Trabajo en Equipo",
				"Comunicación",
				"Creatividad",
				"Resolución de Problemas",
				"Aprendizaje Continuo",
			],
		},
		experience: {
			title: "Experiencia y Formación",
			subtitle: "Mi trayectoria profesional",
			experienceTab: "Experiencia",
			educationTab: "Educación",
			certificationsTab: "Certificaciones",
			verifyCredential: "Verificar",
		},
		projects: {
			title: "Proyectos",
			subtitle: "Algunas cosas que he construido",
			viewProject: "Ver Proyecto",
			viewCode: "Ver Código",
			viewLive: "Ver Demo",
			learnMore: "Saber Más",
			close: "Cerrar",
			projectDetails: "Detalles del Proyecto",
			technologies: "Tecnologías",
		},
		contact: {
			title: "Contacto",
			subtitle: "Conectemos",
			description: "¿Tienes alguna pregunta o quieres trabajar juntos? ¡No dudes en escribirme!",
			name: "Nombre",
			email: "Correo",
			message: "Mensaje",
			send: "Enviar Mensaje",
			sending: "Enviando...",
			success: "¡Mensaje enviado con éxito!",
			error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
			successTitle: "¡Mensaje enviado!",
			successDescription: "Tu mensaje ha sido enviado correctamente.",
			errorTitle: "Error",
			errorDescription: "Error al enviar el mensaje. Por favor, inténtalo de nuevo o usa el enlace de correo.",
			namePlaceholder: "Tu nombre",
			emailPlaceholder: "tu@correo.com",
			messagePlaceholder: "Tu mensaje...",
			copyEmail: "Copiar",
			copied: "¡Copiado!",
			back: "Volver",
		},
		footer: {
			rights: "Todos los derechos reservados.",
			madeWith: "Hecho con",
		},
	},
};

export type Language = keyof typeof translations;
export type TranslationKeys = (typeof translations)["en"];
