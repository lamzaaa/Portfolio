function Header() {
	return (
		<header className="sticky top-0 left-0 w-full z-[150]">
			<div className="container">
				<div className="wrapper px-3 py-2 flex items-center justify-between gap-3 text-tertiary relative bg-gray-900/90 before:pointer-events-none before:absolute before:inset-0 rounded-2xl before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
					<div className="logo">
						<a href="/" className="text-3xl font-bold">
							ThanhLam
						</a>
					</div>
					<nav>
						<ul className="flex items-center gap-7 text-2xl font-semibold">
							<li>
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#projects">Projects</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
