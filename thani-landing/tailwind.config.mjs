/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			textos: '#505050',
			thani100: '#086E7D',
			thani200: '#FFC900',
			background: '#FAFAFA',
		},
		extend: {},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
