/* eslint-disable react-hooks/rules-of-hooks */
import { SplitText } from '@cyriacbr/react-split-text';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function AnimateTitle({
	title,
	description,
}: {
	title: string;
	description?: string;
}) {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start center', 'end end'],
	});

	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLDivElement>(null);

	const [totalTitles, setTotalTitles] = useState(0);
	const [totalDescriptions, setTotalDescriptions] = useState(0);

	useEffect(() => {
		const observer = new MutationObserver(() => {
			// Check for title elements
			if (titleRef.current) {
				const titleElements = titleRef.current.querySelectorAll(
					'.title-split-wrapper'
				);
				if (titleElements.length > 0) {
					setTotalTitles(titleElements.length);
				}
			}

			// Check for description elements
			if (descriptionRef.current) {
				const descElements =
					descriptionRef.current.querySelectorAll('.des-split-wrapper');
				if (descElements.length > 0) {
					setTotalDescriptions(descElements.length);
				}
			}
		});

		// Start observing the container for DOM changes
		if (containerRef.current) {
			observer.observe(containerRef.current, {
				childList: true,
				subtree: true,
				attributes: false,
				characterData: false,
			});
		}

		return () => observer.disconnect();
	}, [containerRef.current]); // Only need to observe container changes

	return (
		<motion.div ref={containerRef} className="container-ref">
			{title && (
				<div className="block-title" ref={titleRef}>
					<h2>
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
						{/* @ts-ignore */}
						<SplitText
							LetterWrapper={({ children, countIndex }) => {
								const letterIndexReversed = Math.abs(
									Number(totalTitles - 1 - countIndex)
								);

								const opacity = useTransform(
									scrollYProgress,
									[0, 0.5 + letterIndexReversed * 0.05],
									[1, 0]
								);
								const x = useTransform(
									scrollYProgress,
									[0, 0.5 + letterIndexReversed * 0.05],
									[0, 40]
								);
								const scaleY = useTransform(
									scrollYProgress,
									[0, 0.5 + letterIndexReversed * 0.05],
									[1, 0.1]
								);
								const color = useTransform(
									scrollYProgress,
									[0, 0.5 + letterIndexReversed * 0.05],
									['#76abae', '#fff']
								);
								return (
									<motion.span
										className="title-split-wrapper inline-block"
										style={{
											opacity,
											x,
											scaleY: scaleY,
											color,
										}}
									>
										{children}
									</motion.span>
								);
							}}
						>
							{title}
						</SplitText>
					</h2>
				</div>
			)}
			{description && (
				<div className="description mt-3" ref={descriptionRef}>
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/* @ts-ignore */}
					<SplitText
						WordWrapper={({ children, wordIndex }) => {
							const wordIndexReversed = Number(
								totalDescriptions - 1 - wordIndex
							);

							const opacity = useTransform(
								scrollYProgress,
								[0.5, 0.6 + wordIndexReversed * 0.05],
								[1, 0]
							);
							const y = useTransform(
								scrollYProgress,
								[0.5, 0.6 + wordIndexReversed * 0.05],
								[0, 40]
							);
							const scaleY = useTransform(
								scrollYProgress,
								[0.5, 0.6 + wordIndexReversed * 0.05],
								[1, 0.1]
							);
							return (
								<motion.span
									className="des-split-wrapper relative"
									style={{
										opacity,
										top: y,
										scaleY: scaleY,
									}}
								>
									{children}
								</motion.span>
							);
						}}
					>
						{description}
					</SplitText>
				</div>
			)}
		</motion.div>
	);
}
