import { AnimateTitle } from '../UI/TextReveal';
import tools from '../../assets/data/tools.json';
import frontend from '../../assets/data/frontend.json';
import GroupItem from './GroupItem';

export default function SectionSkills() {
	return (
		<section id="skills" className="section">
			<div className="container">
				<div className="text-center">
					<AnimateTitle title="Skills" />
				</div>
				<div className="flex flex-wrap justify-center mt-6 -mx-4 gap-y-5">
					{frontend && <GroupItem GroupName="Frontend" items={frontend} />}
					{tools && <GroupItem GroupName="Tools" items={tools} />}
				</div>
			</div>
		</section>
	);
}
