import {
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiVuedotjs,
	SiTailwindcss,
	SiNodedotjs,
	SiPython,
	SiPostgresql,
	SiMongodb,
	SiDocker,
	SiGit,
	SiAmazonwebservices,
	SiVercel,
	SiKubernetes,
	SiApachekafka,
	SiApachespark,
	SiExpress,
	SiReactquery,
	SiKnexdotjs,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const iconMap: Record<string, React.ElementType> = {
	typescript: SiTypescript,
	react: SiReact,
	nextjs: SiNextdotjs,
	vue: SiVuedotjs,
	tailwind: SiTailwindcss,
	nodejs: SiNodedotjs,
	python: SiPython,
	postgresql: SiPostgresql,
	mongodb: SiMongodb,
	docker: SiDocker,
	git: SiGit,
	aws: SiAmazonwebservices,
	vercel: SiVercel,
	kubernetes: SiKubernetes,
	kafka: SiApachekafka,
	spark: SiApachespark,
	express: SiExpress,
	tanstack: SiReactquery,
	azure: VscAzure,
	knexjs: SiKnexdotjs,
};

interface TechIconProps {
	icon: string;
	className?: string;
}

export function TechIcon({ icon, className = "" }: TechIconProps) {
	const IconComponent = iconMap[icon];

	if (!IconComponent) {
		return <span className={className}>{icon.slice(0, 2).toUpperCase()}</span>;
	}

	return <IconComponent className={className} />;
}
