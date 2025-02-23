export default function Item({ name, icon }: { name: string; icon: string }) {
	return (
		<div key={name} className="flex items-center gap-2">
			<div className="icon size-10 rounded-full bg-white/10 [&_img]:size-full [&_img]:object-contain [&_img]:p-2 overflow-hidden">
				<img src={icon} alt={name} />
			</div>
			<h3 className="flex-1">{name}</h3>
		</div>
	);
}
