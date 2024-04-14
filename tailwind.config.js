/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "custom": "1824px"
      },
      textColor: {
        "custom": "#306FBB"
      },
      fill: {
        "custom": "#306FBB"
      },
      backgroundColor: {
        "custom": "#306FBB"
      },
      lineHeight: {
        "custom": "200px"
      },
      fontSize: {
        "10xl": "156px",
        "12xl": "280px",
      }
    },
  },
  plugins: [],
}

