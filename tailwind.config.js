/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			background: "#DCDCDC",
			muiBlueMain: "#1976d2"
		}
		,
		extend: {
			fontFamily: {
				roboto: ["Roboto"],
				poppins: ["Poppins"]
			},
			height: {
				"mainMobile": "calc(100% - 4rem)"
			}
		},
	},
	plugins: [],
}
