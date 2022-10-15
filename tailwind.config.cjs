/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"left-image": "url('/pizza-bg.png')",
				"pizza-login": "url('/pizza-login.png')",
			},
		},
	},
	plugins: [],
}
