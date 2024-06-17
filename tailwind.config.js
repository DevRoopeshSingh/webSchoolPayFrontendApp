// tailwind.config.js

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      boxShadow: {
        "sm": "0 2px 4px 0 rgb(0 0 0 / 0.05)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        // rest of the box shadow values
      },
      screens: {
        sm: "640px",
        "3xl": "1600px",
      }
    },
  },
  plugins: [],
});
