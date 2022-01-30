module.exports = {
  content: ["./src/**/*.{html,css}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        brandblue: "#2078FC",
        clifford: '#da373d',
        lightblue: '#1A75FC',
        lightbackground: '#D5E6FF',
        deepblue: '#0D3B7E'
      }
    }
  },
  plugins: [],
}
