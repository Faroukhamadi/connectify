module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        unisans: ['Uni Sans', 'sans-serif'],
        unisansHeavyItalic: ['unisans-heavy-italic', 'sans-serif'],
        unisansHeavy: ['unisans-heavy', 'sans-serif'],
        unisansThinItalic: ['unisans-thin-italic', 'sans-serif'],
        unisansThin: ['unisans-thin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
