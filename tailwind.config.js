/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'emerald': '#145A32',      // Deep Emerald
        'gold': '#D4AF37',         // Royal Gold
        'porcelain': '#F8F5F2',    // Porcelain White
        'batik-blue': '#234E70',   // Batik Blue
        'taupe': '#BFA980',        // Warm Taupe
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
