/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				discodes: {
					primary: '#8b5cf6',

					secondary: '#d8b4fe',

					accent: '#1fb2a6',

					neutral: '#2a323c',

					'base-100': '#1d232a',

					info: '#3abff8',

					success: '#36d399',

					warning: '#fbbd23',

					error: '#f87272'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
