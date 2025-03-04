export default function SectionContact() {
	return (
		<section className="section min-h-[50vh] flex items-center" id="contact">
			<div className="container">
				<div className="block-title text-center">
					<h2>Thanks for your time</h2>
				</div>
				<div className="description text-center mt-5">
					Have a question or want to work together? Mail me at{' '}
					<a
						href="mailto:thanhlam1201.work@gmail.com"
						className="bg-background font-bold text-white inline-block p-1 rounded-sm"
					>
						thanhlam1201.work@gmail.com
					</a>
				</div>
			</div>
		</section>
	);
}
