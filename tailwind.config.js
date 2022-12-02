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
      laptop: '1401px'
    },
    colors: {
      "yellow": '#acb625',
      'white': '#eee',
      'black': 'rgb(0 0 0)',
      'gray': '#2222',
      "blue": '#b3eafe',
      'main': '#0a141e',
      'hover_gain' : 'hsla(0,0%,100%,.3)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        'form-search': '50px 0 0 50px',
        'button-search': '0 50px 50px 0',
      },
      backgroundImage: {
        'content-pokemon': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/list_top_bg.jpg')",
        'heading-list': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/pokedex_bg.png')",
        'cut-pokemon': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/random_center_bg.png')",
        'list-pokemon': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/list_bg.jpg')",
        'sort-close': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/sort_close_bg.png')",
        'select-open': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/sort_open_bg.png')",
        'load-more': "url('https://vn.portal-pokemon.com/play/resources/pokedex/img/morebtn_bg.png')",
      },
      backgroundPosition: {
        'sort': '50% 100%'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      zIndex: {
        'xl': 100,
        'hm': 110
      },
      margin: {
        'ml': '0 40.285714%',
        'auto_1': '0 auto'
      },
      padding: {
        'bm': '0 3.64285714%',
        'sml': '0 0 1.5em',
        'lml': '.3em 0',
        'list': '2em 3%'
      },
      boxShadow: {
        'input-search': '0 0 2px 1px #fff',
        'button': '0 0 3px 3px #ffdc00',
        'quiz': '0 0 10px #b4ebff, inset 0 0 10px #b4ebff',
        'load': '0 0 5px #b3eafe, 0 0 5px #b3eafe',
      },
    }
  },
  plugins: [],
}