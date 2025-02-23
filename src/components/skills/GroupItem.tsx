import { useRef } from 'react';
import Item from './Item';
import { motion, useScroll, useTransform } from 'motion/react';

export default function GroupItem({
	GroupName,
	items,
}: {
	GroupName: string;
	items: { name: string; icon: string }[];
}) {
	const groupItemRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: groupItemRef,
		// offset: ['start start', 'end start'],
	});
	return (
		<motion.div
			ref={groupItemRef}
			className="w-full lg:w-1/2 xl:w-1/3 px-4"
			style={{
				opacity: useTransform(scrollYProgress, [0.5, 1], [1, 0]),
				y: useTransform(
					scrollYProgress,
					[0.5, 1], // Input range
					[0, 100] // Move up as element becomes visible
				),
			}}
		>
			<div className="wrapper bg-background/30 rounded-lg p-4 relative h-full">
				<div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-tertiary/30 rounded-lg animate-pulse backdrop-blur-sm -z-1"></div>
				<h3 className="text-lg font-bold">{GroupName}</h3>
				<div className="grid grid-cols-2 gap-4 mt-3">
					{items.map(item => (
						<Item key={item.name} icon={item.icon} name={item.name} />
					))}
				</div>
			</div>
		</motion.div>
	);
}
