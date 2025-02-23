interface LogoProps {
	backgroundColor?: string;
	fillColor?: string;
	width?: number;
	height?: number;
}

const Logo = ({ width = 600, height = 420 }: LogoProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill="none"
		viewBox="0 0 600 420"
	>
		{/* <rect width="600" height="420" fill="black" /> */}
		<path
			d="M111.2 260.2L63 214.2L111.2 168.4H134.2L85.8 214.2L134.2 260.2H111.2Z"
			fill="url(#paint0_linear_1_10)"
		/>
		<path
			d="M258.338 148V162.8H220.338V287.4H202.137V162.8H163.938V148H258.338Z"
			fill="url(#paint1_linear_1_10)"
		/>
		<path
			d="M298.941 272.6H347.741V287.4H280.741V148H298.941V272.6Z"
			fill="url(#paint2_linear_1_10)"
		/>
		<path
			d="M435.069 99L380.269 321.4H362.269L416.869 99H435.069Z"
			fill="url(#paint3_linear_1_10)"
		/>
		<path
			d="M465.586 168.4H488.586L536.986 214.2L488.586 260.2H465.586L513.986 214.2L465.586 168.4Z"
			fill="url(#paint4_linear_1_10)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_1_10"
				x1="532.693"
				y1="321.4"
				x2="67.2927"
				y2="99"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_1_10"
				x1="532.693"
				y1="321.4"
				x2="67.2927"
				y2="99"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="paint2_linear_1_10"
				x1="532.693"
				y1="321.4"
				x2="67.2927"
				y2="99"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="paint3_linear_1_10"
				x1="532.693"
				y1="321.4"
				x2="67.2927"
				y2="99"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
			<linearGradient
				id="paint4_linear_1_10"
				x1="532.693"
				y1="321.4"
				x2="67.2927"
				y2="99"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
);

export default Logo;
