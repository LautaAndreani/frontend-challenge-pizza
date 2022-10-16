/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        login: "#707070",
        login_title: "#000000",
        btn: "#f9c444",
        footer: "#1f1f1f",
      },
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
