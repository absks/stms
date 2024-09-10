/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    extend: {colors: {
      customGreen: '#007E3C', 
    },boxShadow: {
      custom: '0px 3.44px 3.51px 0px rgba(0, 0, 0, 0.25)',
      customSidebar: '0px 4px 4px 0px #00000040',
    },
  },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke'), // no options to configure
  ],
  
}


