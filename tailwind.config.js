/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nft-purple": "#3D00B7",
        "dark-nft-purple": "#310092",
        "nft-blue": "#2639ED",
        "nft-light-purple": "#5539A8",
        "nft-gray": "#D9E0EC",
      },
      fontFamily: {
        averta: ["var(--font-averta)", "sans-serif"],
        integral: ["var(--font-integral)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
