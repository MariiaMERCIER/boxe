/** @type  { import ("tailwindcss").Config}*/

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "1200": "75rem",
        "280": "17.5rem",
      },
      height: {
        "300": "18.75rem",
      },
      minHeight: {
        "592": "37rem",
      },
    },
  },
  plugins: [],
});
// export default config;
