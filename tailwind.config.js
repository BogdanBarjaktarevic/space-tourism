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
        "home-desktop":
          "url('../public/assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('../public/assets/destination/background-destination-mobile.jpg')",
        "destination-desktop":
          "url('../public/assets/destination/background-destination-desktop.jpg')",
        "crew-mobile":
          "url('../public/assets/crew/background-crew-mobile.jpg')",
        "crew-mobile":
          "url('../public/assets/crew/background-crew-desktop.jpg')",
        "tech-mobile":
          "url('../public/assets/technology/background-technology-mobile.jpg')",
        "tech-desktop":
          "url('../public/assets/technology/background-technology-desktop.jpg')",
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
        navColor: "rgba(255, 255, 255, 0.04)",
        grayTitleColor: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
