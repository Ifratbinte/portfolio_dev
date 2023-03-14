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
      colors: {
        "sea-green": "#009e66",
      },
      backgroundImage: {
        "hero-bg": "url('/images/bg-hero.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    container: {
      padding: "2rem",
    },
    // container: {
    //   padding: {
    //     sm: "2rem",
    //     lg: "4rem",
    //     xl: "5rem",
    //     2xl: "6rem",
    //   },
    // },
  },
  plugins: [],
};
