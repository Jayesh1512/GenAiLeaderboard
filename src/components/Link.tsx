import { cn } from "@/lib/utils";

export function Link(props: LinkProps) {
	return (
		<a
			className={cn("group text-primary transition duration-300", props.className)}
			href={props.href}
			target={props.newTab ? "_blank" : "_self"}
		>
			{props.text}
			<span className="block h-0.5 max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
		</a>
	);
}

interface LinkProps {
	href: string;
	text: string;
	className?: string;
	newTab?: boolean;
}
