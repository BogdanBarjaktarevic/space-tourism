/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile":
          "url('../public/assets/home/background-home-mobile.jpg')",
        "destination-mobile":
          "url('../public/assets/destination/background-destination-mobile.jpg')",
      },
      fontFamily: {
        paragraphFont: "var(--barlow)",
        titleFont: "var(--bellefair)",
        extraFont: "var(--barlowCondensed)",
      },
      colors: {
        menuColor: "hsl(231, 77%, 90%)",
        homeParagraph: "hsla(231, 79%, 90%, 1)",
        line: "hsla(231, 15%, 26%, 1)",
        techColor: "hsla(230, 35%, 7%, 1)",
      },
    },
  },
  plugins: [],
};
