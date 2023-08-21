/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			customGray: "#DCDCDC",
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
			},
			width: {
				"mainDesktop": "calc(100% - 14rem)"
			},
			maxWidth: {
				"navItemMobile": "4rem"
			}
		},
	},
	plugins: [],
}
