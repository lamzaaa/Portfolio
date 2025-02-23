import Header from './components/global/header';
import SectionOverview from './components/about/About';
import SectionProjects from './components/project/Project';
import ReactLenis, { LenisRef } from 'lenis/react';
import { useEffect, useRef } from 'react';
import { cancelFrame, frame } from 'motion/react';
import SectionContact from './components/Contact';
import SectionSkills from './components/skills/Skill';

function App() {
	// const lenis = useLenis();
	const lenisRef = useRef<LenisRef>(null);
	useEffect(() => {
		function update(data: { timestamp: number }) {
			const time = data.timestamp;
			lenisRef.current?.lenis?.raf(time);
		}

		frame.update(update, true);

		return () => cancelFrame(update);
	}, []);

	return (
		<ReactLenis root>
			<Header />
			<main>
				<SectionOverview />
				<SectionSkills />
				<SectionProjects />
				<SectionContact />
			</main>
		</ReactLenis>
	);
}

export default App;
