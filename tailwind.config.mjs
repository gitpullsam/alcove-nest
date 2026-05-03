/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest:   '#0E1A13',
        canopy:   '#162218',
        moss:     '#2A3D2E',
        fern:     '#3E5C42',
        mist:     '#8FAF94',
        fog:      '#C4D4C6',
        parchment:'#EDE8DF',
        ember:    '#C8834A',
        'ember-light': '#E0A86E',
        slate:    '#4A5568',
      },
      fontFamily: {
        display: ['"Freight Display Pro"', '"Bodoni Moda"', 'Georgia', 'serif'],
        serif:   ['"Bodoni Moda"', 'Georgia', 'serif'],
        sans:    ['"Cabinet Grotesk"', '"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
