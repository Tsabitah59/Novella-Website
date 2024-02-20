/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      }
    },
    screen: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },

    extend: {
      colors: {
        title: '#243E66',
        accent: {
          one: '#89CFF3',
          two: '#CDF5FD',
          three: '#00A9FF',
        },
        greyyy: '#666666',
        
      },

      fontFamily: {
        title: 'Fredoka',
        main: 'Poppins'
      },

      boxShadow: {
        custom1: '0px 4px 24px 0px rgba(0, 169, 255, 0.17)',
        custom2: '0px 0px 18.5px 0px rgba(36, 62, 102, 0.29)'
      }
    },
  },
  plugins: [],
}

