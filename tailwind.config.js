module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lufga-regular": ["Lufga-Regular"],
        "lufga-semibold": ["Lufga-Semibold"],
        "lufga-bold": ["Lufga-Bold"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        blue: "#2E27FE",
        purple: "#9A12FF",
        gray: "#A3A5C1"
      }
    },
  },
  plugins: [],
}