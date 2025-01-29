/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redressed: ['Redressed', 'sans-serif'],
        Playfair: ['Playfair Display', 'sans-serif'],
        Open: ['Open Sans', 'sans-serif'],
        allura: ['Allura', 'sans-serif'],
        poppins: ['Poppins','Open Sans']
      },
    },
  },
  plugins: [],
};
