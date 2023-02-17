/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
      // 'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {}
  },
  plugins: []
};
