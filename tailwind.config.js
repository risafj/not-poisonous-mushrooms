const fadeInAnimationKeyframes = {
  '0%': { opacity: 0 }, '100%': { opacity: 1 } 
};

// https://codepen.io/jamesdoc/pen/qBbeOym
const fadeInAnimationRules = 'fadeIn 1s ease-in forwards';

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
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
  plugins: [],
}
