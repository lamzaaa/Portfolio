import projects from '../../assets/data/projects.json';
import { motion } from 'motion/react';
import Button from '../UI/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect, useRef, useState } from 'react';
import { BaselineClose } from '../../assets/icons/close';
import { useParallax } from '../../hooks/useParallax';
import { AnimateTitle } from '../UI/TextReveal';

export default function SectionProjects() {
	return (
		<section
			className="section min-h-screen flex items-center overflow-hidden"
			id="projects"
		>
			<div className="container">
				<div className="text-center">
					<AnimateTitle
						title="Featured Projects"
						description="These are some of my highlight projects."
					/>
				</div>
				<div className="list mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
					{projects
						.slice(0)
						.reverse()
						.map((project, index) => (
							<ProjectCard key={project.id} {...project} index={index} />
						))}
				</div>
			</div>
		</section>
	);
}

function ProjectCard(
	project: (typeof projects)[number] & {
		index: number;
	}
) {
	const cardRef = useRef<HTMLDivElement>(null);
	const viewRatio = useParallax(
		[-1, -0.7, 0.7, 1],
		[0, 1, 1, 0],
		cardRef as React.RefObject<HTMLElement>
	);
	const yParallax = useParallax(
		[-1, -0.7, 0.7, 1],
		[-50 * ((project.index % 3) + 1), 0, 0, 50 * ((project.index % 3) + 1)],
		cardRef as React.RefObject<HTMLElement>
	);

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0 }}
			transition={{
				duration: 0.5,
				delay: project.index * 0.2,
			}}
			style={{
				opacity: viewRatio,
				y: yParallax,
			}}
			className="item px-5 py-6 bg-black transition-all rounded-xl duration-500 border-2 border-transparent hover:border-background"
		>
			<div className="h-full flex flex-col overflow-hidden">
				<div className="logo h-[60px] mb-4 [&_img]:w-auto [&_img]:h-full">
					<img src={project.image} alt={project.title} />
				</div>
				<div className="content space-y-3 flex-1">
					<div className="title font-bold text-2xl">
						<h3>{project.title}</h3>
					</div>
				</div>
				<div className="bottom mt-8">
					<div className="flex items-center gap-2 flex-wrap">
						<div className="link flex items-center gap-2 flex-wrap">
							{typeof project.link === 'string' ? (
								<Button
									className=""
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									View Project
								</Button>
							) : (
								project.link.map((link, linkIndex) => (
									<Button
										key={linkIndex}
										className=""
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{link.name}
									</Button>
								))
							)}
						</div>
						<PopupContent {...project} />
					</div>
					<div className="technology mt-4 overflow-auto whitespace-nowrap hide-scrollbar p-3 -m-3">
						<ul className="flex items-center text-xs -space-x-2">
							{project.technology.map(tech => (
								<li
									key={tech}
									className="py-1 px-2 bg-secondary rounded-sm transition-all hover:bg-primary hover:scale-105 select-none border border-white/30 hover:px-5
											"
								>
									{tech}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

const PopupContent = (project: (typeof projects)[number]) => {
	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);
	return (
		<>
			<Button onClick={() => setOpen(true)} className="bg-secondary">
				Project Detail
			</Button>
			<Popup open={open} closeOnDocumentClick modal onClose={closeModal}>
				{
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					close => (
						<motion.div
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							className="modal bg-background relative py-8 px-4 rounded-md"
						>
							<button
								className="close absolute -top-3 -right-3 size-10 bg-secondary rounded-sm [&_svg]:size-full transition-all hover:bg-primary hover:scale-105 active:scale-90 active:bg-background"
								onClick={close}
							>
								<BaselineClose />
							</button>
							<div className="text-center -sm:text-lg -sm:font-bold block-title">
								{project.title}
							</div>
							<div className="role w-fit bg-black rounded-sm px-2 py-1 mt-2 mb-4 mx-auto text-sm">
								<div className="ctn">
									<strong>{project.role}</strong>
								</div>
							</div>
							<div className="content space-y-8">
								{project.task && (
									<div className="task text-lg font-medium flex-1 [&_ul]:list-disc [&_ul]:pl-5 rounded-sm">
										<div className="label font-bold border-b border-white mb-2 pb-2">
											What I did
										</div>
										<div
											className="ctn"
											dangerouslySetInnerHTML={{
												__html: project.task,
											}}
										></div>
									</div>
								)}
								{project.description && (
									<div className="description text-lg font-medium flex-1 [&_ul]:list-disc [&_ul]:pl-5 rounded-sm">
										<div className="label font-bold mb-1 border-b border-white pb-2">
											Description
										</div>
										<div
											className="ctn"
											dangerouslySetInnerHTML={{
												__html: project.description,
											}}
										></div>
									</div>
								)}
							</div>
						</motion.div>
					)
				}
			</Popup>
		</>
	);
};
