/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      colors: {
        "primary-cyan": "hsl(179, 62%, 43%)",
        "primary-cyan-light": "hsl(179, 47%, 55%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
        "bright-yellow-dark": "hsl(71, 50%, 50%)",
        "neutral-light-gray": "hsl(204, 43%, 93%)",
        "neutral-grayish-blue": "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
