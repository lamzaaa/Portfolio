export default function Item({ name, icon }: { name: string; icon: string }) {
	return (
		<div
			key={name}
			className="flex items-center gap-2  transition-all hover:p-1 hover:-m-1 hover:bg-primary/50 rounded-md group"
		>
			<div className="icon size-10 rounded-full bg-white/10 [&_img]:size-full [&_img]:object-contain [&_img]:p-2 overflow-hidden transition-all group-hover:scale-95 ">
				<img src={icon} alt={name} />
			</div>
			<h3 className="flex-1 transition-all group-hover:-translate-x-1">
				{name}
			</h3>
		</div>
	);
}
