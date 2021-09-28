const fadeInAnimationKeyframes = {
  '0%': { opacity: 0 }, '100%': { opacity: 1 } 
};

// https://codepen.io/jamesdoc/pen/qBbeOym
const fadeInAnimationRules = 'fadeIn 1s ease-in forwards';

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: fadeInAnimationKeyframes
      },
      animation: {
        fadeIn: fadeInAnimationRules
      }
    },
  },
  variants: {
    extend: {},
    animation: ['motion-safe']
  },
  plugins: [],
}
