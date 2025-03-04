import ColLeft from './ColLeft';
import ColRight from './ColRight';

function SectionOverview() {
	return (
		<section
			className="section min-h-screen flex items-center overflow-hidden"
			id="about"
		>
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-10 items-center">
					<ColLeft />
					<ColRight />
				</div>
			</div>
		</section>
	);
}

export default SectionOverview;
