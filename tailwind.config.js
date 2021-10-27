module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Atma: ["Atma", "cursive"],
        SignikaNegative: ['"Signika Negative"', "sans-serif"],
      },
      colors: {
        "web-blue-light": "#5092CD",
        "web-blue": "#17417C",
        "web-blue-dark": "#003F81",
        "web-yellow": "#EECE42",
        "web-red": "#AB316A",
        "web-green": "#97AC6C",
        "web-orange": "#DD8756",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
