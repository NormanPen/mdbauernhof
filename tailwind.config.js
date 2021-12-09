module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": { max: "1800px" },
      },
      maxWidth: {
        "screen-3xl": "1623px",
      },
      height: {
        98: "35rem",
        100: "40rem",
      },
      spacing: {
        160: "44.25rem",
      },
      backgroundImage: {
        "header-mobile": "url('images/bgMobileBlue.png')",
        "hero-texture": "url('images/bgBigOvalLightPing.png')",
      },
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
        "web-grau": "#828282",
        "web-orange": "#DD8756",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
