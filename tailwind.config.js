/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#f5f5f5",
      },
      screens: {
        xss: "360px", // Correct
        xs: "475px",
        sm: "640px", // Correct
        md: "768px", // Correct
        lg: "1024px", // Correct
        "2lg": "1163px", // Correct
        xl: "1280px", // Correct
        "2xl": "1536px", // Correct
        "3xl": "1868px", // Correct
      },
    },
  },
  plugins: [],
};
