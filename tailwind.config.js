/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      robotoSlab: ["robotoSlab", "serif"],
    },
    extend: {},
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "visible",
        },
        "100%": {
          width: "100%",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "white",
        },
      },
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s",
      caret: "typing 2s steps(20) forwards, blink 1s steps(20) infinite 2s",
    },
  },
  plugins: [],
};
