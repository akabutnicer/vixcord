/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      spacing: {
        '17': '65px'
      },
      fontSize: {
        xxs: '11px'
      }
    },
  },

  plugins: [
    require("@tailwindcss/forms")
  ],
}

