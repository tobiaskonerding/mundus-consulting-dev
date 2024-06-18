/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mc-neon-türkis": "#6BFFF7",
        "mc-violett": "#7724E1",
      },
      //Animation für ändernde Wörter hinzufügen
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        typewriter: "typewriter 3s steps(12) forwards",
        caret:
          "typewriter 3s steps(12) forwards, blink 1s steps(12) infinite 2s",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
