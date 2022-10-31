/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
			keyframes: {
				push: {
					"0% 100%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(20px)" },
				},
			},
			animation: {
				push: "push 2s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
