import { twMerge } from 'tailwind-merge';

export default function Button({
	children,
	className,
	...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			className={twMerge(
				'block p-2 bg-white/10 w-fit rounded-[4px] hover:bg-white/20 transition-colors cursor-pointer',
				className
			)}
			{...props}
		>
			{children}
		</a>
	);
}
