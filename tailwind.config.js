module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundImage: {
      'search': "url('/images/search.svg')",
    },
    extend: {
      fontFamily: {
        unisans: ['Uni Sans', 'sans-serif'],
        unisansHeavyItalic: ['unisans-heavy-italic', 'sans-serif'],
        unisansHeavy: ['unisans-heavy', 'sans-serif'],
        unisansThinItalic: ['unisans-thin-italic', 'sans-serif'],
        unisansThin: ['unisans-thin', 'sans-serif'],
        sourcesansLight: ['sourcesanspro-light', 'sans-serif'],
        sourcesansExtraLight: ['sourcesanspro-extralight', 'sans-serif'],
        sourcesansRegular: ['sourcesanspro-regular', 'sans-serif'],
        sourcesansSemiBold: ['sourcesanspro-semibold', 'sans-serif'],
        // helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        helvetica: ['Helvetica'],
      },
      colors: {
        discord: '#404EEB',
        discord_dark: '#23272a',
        sky: {
          550: 'hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%)',
        },
      },
    },
  },
  plugins: [],
};
