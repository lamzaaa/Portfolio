const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
	blocklist: ['container'],
	theme: {
		extend: {
			screens: {
				xs: '410px',
				sm: '576px',
				md: '768px',
				lg: '1024px',
				xl: '1200px',
				'-sm': {
					max: '575.98px',
				},
				'-xl': {
					max: '1199.98px',
				},
			},
		},
	},
	plugins: [
		plugin(({ addVariant, addUtilities, matchUtilities, e, theme }) => {
			matchUtilities(
				{
					ratio: value => {
						const [numerator, denominator] = value.split('/');
						if (!numerator || !denominator) return {};

						const paddingTop =
							(parseFloat(numerator) / parseFloat(denominator)) * 100;
						return { paddingTop: `${paddingTop}%` };
					},
				},
				{
					type: 'any',
				}
			);
			// const breakpoints = theme('screens');
			// Object.keys(breakpoints).forEach(breakpoint => {
			// 	matchUtilities(
			// 		{
			// 			[`${breakpoint}:ratio`]: value => {
			// 				const [numerator, denominator] = value.split('/');
			// 				if (!numerator || !denominator) return {};

			// 				const paddingTop =
			// 					(parseFloat(numerator) / parseFloat(denominator)) * 100;
			// 				console.log('🟩  Object.keys  paddingTop:', paddingTop);
			// 				return { paddingTop: `${paddingTop}%` };
			// 			},
			// 		},
			// 		{
			// 			type: 'any',
			// 		}
			// 	);
			// });
		}),
	],
};
