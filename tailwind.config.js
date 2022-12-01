/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      md: '1.6rem',
      small: '2.8rem'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "yellow": '#acb625',
      'white': '#eee',
      'black': 'rgb(0 0 0)',
      'gray': '#2222'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'content-pokemon': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/list_top_bg.jpg')",
        'heading-list': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/pokedex_bg.png')",
        'cut-pokemon': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/random_center_bg.png')"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      zIndex: {
        'xl': 100
      },
      margin: {
        'ml': '0 39.28571429%'
      }
    }
  },
  plugins: [],
}