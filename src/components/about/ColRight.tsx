import { motion, useTransform, useScroll } from 'motion/react';
import avatar from '../../assets/me.png';

export default function ColRight() {
	return (
		<div className="col-right">
			<div className="max-w-[50%] lg:max-w-[80%] w-full mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
					}}
					viewport={{
						once: true,
					}}
					transition={{
						delay: 0.5,
					}}
					style={
						{
							'--data-y': useTransform(
								useScroll().scrollYProgress,
								[0, 1],
								[0, 100]
							),
						} as React.CSSProperties
					}
					className="wrapper  relative before:absolute before:w-full before:h-full before:-bottom-12 before:-right-12 before:bg-secondary/40 before:z-1 overflow-visible before:translate-y-[calc(var(--data-y)*1px)] before:translate-x-[calc(var(--data-y)*0.5px)]"
				>
					<div className="img ratio-[1/1] [&_img]:object-top z-2 translate-y-[calc(var(--data-y)*-1px)] translate-x-[calc(var(--data-y)*-0.5px)]">
						<img src={avatar} alt="" />
					</div>
				</motion.div>
			</div>
		</div>
	);
}
