module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://img.freepik.com/free-vector/japanese-wave-line-art-landscape-background-abstract-mountain-banner-design-pattern-vector-illustration-geometric-poster_90220-715.jpg?w=1380&t=st=1664961248~exp=1664961848~hmac=602533e6b9e269ede6b7174cea9239c722a7473a25a1fe0d75fb9a855d61c92a')",
      },
    },
  },
  plugins: [],
};