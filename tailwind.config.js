/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			background: "#DCDCDC"
		}
		,
		extend: {
			fontFamily: {
				roboto: ["Roboto"],
				poppins: ["Poppins"]
			}
		},
	},
	plugins: [],
}

