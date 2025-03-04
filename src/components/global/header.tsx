import { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/logo';
import { GithubSolid } from '../../assets/icons/github';
import { RoundEmail } from '../../assets/icons/email';
import { useViewWith } from '../../hooks/useViewWith';
import { HamburgerMenu } from '../../assets/icons/burger';
import { AnimatePresence, motion } from 'motion/react';
const menuData = [
	{
		label: 'About',
		href: '#about',
	},
	{
		label: 'Experience',
		href: '#experience',
	},
	{
		label: 'Skills',
		href: '#skills',
	},
	{
		label: 'Projects',
		href: '#projects',
	},
	// {
	// 	label: 'Contact',
	// 	href: '#contact',
	// },
];

function Header() {
	const headerRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const WIDTH = useViewWith();
	const isMobile = WIDTH < 1024;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				headerRef.current &&
				!headerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		// Only add listener when menu is open
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);
	function handleScrollToSection(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		const id = e.currentTarget.getAttribute('href')?.slice(1) || '';
		if (id) {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
	const handleScroll = () => {
		const currentHeight = headerRef.current?.offsetHeight || 0;
		if (window.scrollY > currentHeight) {
			headerRef.current?.classList.add('active');
		} else {
			headerRef.current?.classList.remove('active');
		}
	};
	useEffect(() => {
		handleScroll();
	}, []);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		// Cleanup function
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const domain = new URL(window.location.href);
	// use
	return (
		<>
			<header
				ref={headerRef}
				className={`sticky top-0 left-0 w-full z-[150] ${
					isMobile && 'h-[80px] flex items-center'
				}`}
			>
				<div className="container">
					<div className="wrapper flex items-center justify-between gap-3 text-tertiary relative before:pointer-events-none before:absolute before:inset-0 rounded-[4px] py-[17px]">
						<div
							className={`logo w-[80px] ${
								isMobile ? 'absolute left-1/2 -translate-x-1/2' : ''
							}`}
						>
							<a
								href={domain.href}
								className="text-3xl font-bold [&_svg]:w-full [&_svg]:h-auto [&_svg]:rounded-xl"
							>
								<Logo
									backgroundColor="var(--color-transparent)"
									fillColor="var(--color-neutral-100)"
								/>
							</a>
						</div>
						{WIDTH > 768 && (
							<nav className="flex-1 flex justify-center">
								<ul className="flex items-center gap-7 text-xl text-white">
									{menuData.map(menu => (
										<li key={menu.href}>
											<a onClick={handleScrollToSection} href={menu.href}>
												{menu.label}
											</a>
										</li>
									))}
								</ul>
							</nav>
						)}
						<div className="w-[80px] contact text-white/50 flex items-center gap-5">
							<a
								className="transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/40"
								href="https://github.com/lamzaaa"
								target="_blank"
							>
								<GithubSolid width={28} height={28} />
							</a>
							<a
								className="transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/40"
								href="mailto:lamsuco123@gmail.com"
							>
								<RoundEmail width={28} height={28} />
							</a>
						</div>
						{isMobile && (
							<div className="burger-menu">
								<button onClick={() => setIsOpen(!isOpen)}>
									<HamburgerMenu width={28} height={28} color="white" />
								</button>
							</div>
						)}
					</div>
				</div>
				{isMobile && (
					<AnimatePresence>
						{isOpen && (
							<motion.div
								key="mobile-menu"
								className="mobile-menu absolute top-[80px] left-1/2 -translate-x-1/2 z-[100] bg-background/50 backdrop-blur-sm max-w-[96%] px-6 rounded-2xl border border-white/10 w-full"
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								transition={{ duration: 0.3 }}
							>
								<ul className="">
									{menuData.map(menu => (
										<li key={menu.href}>
											<a
												className="text-xl py-2 block"
												onClick={handleScrollToSection}
												href={menu.href}
											>
												{menu.label}
											</a>
										</li>
									))}
								</ul>
							</motion.div>
						)}
					</AnimatePresence>
				)}
			</header>
		</>
	);
}

export default Header;
