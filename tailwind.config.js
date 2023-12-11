module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['"Bruno Ace SC"', 'sans-serif'],
      secondary: ['Itim', 'cursive'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: ' #E6BE8A',
        accent: '#E6BE8A',
        dark: "#292A2E"
      },
      backgroundImage: {
        // site: "url('./Assets/background.jpg')",
        about: "url('./Assets/about.png')",
        services: "url('./Assets/services.jpg')",
      },
    },
  },
  plugins: [],
};
