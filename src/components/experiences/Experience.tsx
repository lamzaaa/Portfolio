import { AnimateTitle } from '../UI/TextReveal';

export default function SectionExperience() {
	return (
		<section className="section min-h-screen flex items-center" id="experience">
			<div className="container">
				<div className="text-center">
					<AnimateTitle title="Experience" />
				</div>
				<div className="timelines max-w-[800px] mx-auto w-full">
					<div className="timeline space-y-3">
						<div className="timeline-content border-l-2 border-white mt-10 py-4 px-4 md:px-8">
							<div className="flex sm:items-center justify-between flex-wrap gap-3 -sm:flex-col">
								<div className="title text-3xl font-bold">
									<h3>CanhCam</h3>
								</div>
								<div className="text-sm text-white/60">2021 - Present</div>
							</div>
							<div className="sub-title text-sm my-2 text-white/70 sm:block hidden">
								Front-end Developer
							</div>
							<div className="description [&_li+li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
								<ul>
									<li>
										Collaborate with cross-functional teams to ensure seamless
										project execution and alignment with business objectives.
									</li>
									<li>
										Design and develop responsive, user-centric web applications
										leveraging cutting-edge front-end frameworks and tools.
									</li>
									<li>
										Enhance website performance and scalability through the
										application of industry-standard coding practices and
										optimization techniques.
									</li>
									<li>
										Tackle complex technical problems by crafting innovative and
										efficient solutions tailored to project needs.
									</li>
									<li>
										Oversee project timelines and deliverables, ensuring timely
										completion while exceeding client expectations.
									</li>
									<li>
										Lead code review sessions and provide mentorship to junior
										developers, fostering a culture of continuous learning and
										growth.
									</li>
									<li>
										Successfully delivered end-to-end coding solutions for 70+
										projects, catering to a wide range of industries and client
										specifications.
									</li>
									<li>
										Gained extensive experience across multiple sectors,
										enabling a deep understanding of diverse business needs and
										technical requirements.
									</li>
									<li>
										Streamlined development processes to improve efficiency and
										reduce time-to-market for critical projects.
									</li>
								</ul>
							</div>
						</div>
						<div className="timeline-content border-l-2 border-white mt-10 py-4 px-4 md:px-8">
							<div className="flex sm:items-center justify-between flex-wrap gap-3 -sm:flex-col">
								<div className="title text-3xl font-bold">
									<h3>HD Agency - Freelancer</h3>
								</div>
								<div className="text-sm text-white/60">04/2024 - 05/2024</div>
							</div>
							<div className="sub-title text-sm my-2 text-white/70 sm:block hidden">
								Front-end Developer
							</div>
							<div className="description [&_li+li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
								<ul>
									<li>
										Developed a responsive website using HTML, CSS, JavaScript
										and Wordpress.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
