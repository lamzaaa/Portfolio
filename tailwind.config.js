module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	blocklist: ['container'],
	theme: {
		extend: {
			screens: {
				xs: '410px',
				sm: '576px',
				md: '768px',
				lg: '1024px',
				xl: '1200px',
			},
		},
	},
};
