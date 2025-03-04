import { motion } from 'motion/react';
import { SplitText } from '@cyriacbr/react-split-text';
import { useParallax } from '../../hooks/useParallax';

export default function ColLeft() {
	const yTransform = useParallax([0, 1], [0, -150]);
	const opacityTransform = useParallax([0, 1], [1, 0]);
	// const scaleTransform = useParallax([0, 1], [1, 0.9]);
	return (
		<motion.div
			transition={{
				delay: 0.5,
			}}
			style={{
				y: yTransform,
				opacity: opacityTransform,
				// scaleX: scaleTransform,
			}}
			className="col-left"
		>
			<div className="-sm:text-xl font-bold block-title">
				<h1 className="inline-flex">
					Hello, I'm{' '}
					<div className="text-tertiary ml-[0.5ch] overflow-hidden">
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
						{/* @ts-ignore */}
						{[...'Thanh Lam'].map((char, index) => (
							<motion.span
								key={`${char}-${index}`}
								className="wrapper inline-block"
								initial={{ opacity: 0, x: 30, scaleY: 0.1, rotate: 10 }}
								animate={{
									opacity: 1,
									x: 0,
									scaleY: 1,
									rotate: 0,
								}}
								transition={{
									duration: 0.5,
									delay: index * 0.05,
									ease: 'easeOut',
								}}
							>
								{char === ' ' ? '\u00A0' : char}
							</motion.span>
						))}
					</div>
				</h1>
			</div>
			<motion.h2
				className="mt-3 text-lg sm:text-xl"
				initial={{
					opacity: 0,
					y: 10,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					once: true,
				}}
				transition={{
					duration: 0.5,
					delay: 0.5,
				}}
			>
				Frontend Developer
			</motion.h2>
			<h3 className="description text-lg sm:text-xl mt-4 sm:mt-8 space-y-3">
				<p>Born in 2000 in Ho Chi Minh City, Vietnam.</p>
				<p>I believe web design can be more deverse and inspiring.</p>
				<p>
					With a mission to present the possibilities of web design, I am
					pursuing new expressions through experiments and thoughts.
				</p>
			</h3>
		</motion.div>
	);
}
