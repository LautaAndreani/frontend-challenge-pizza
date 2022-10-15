/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"left-image": "url('/pizza-bg.png')",
				"pizza-login": "url('/pizza-login.png')",
			},
			keyframes: {
				moveToLeft: {
					from: { left: "-100%" },
					to: { left: "0" },
				},
			},
			animation: {
				moveToLeft: "moveToLeft 1.5s ease-in-out",
			},
		},
	},
	plugins: [],
}
