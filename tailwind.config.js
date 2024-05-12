/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(90deg, #030000 0%, rgba(255,31,0,0.008) 75%)",
      },
      spacing: {
        7: "1.75rem",
        8.5: "2.1875rem",
        11.5: "2.625rem",
        14.5: "3.625rem",
        18: "4.5rem",
        38: "9.375rem",
      },
      backgroundColor: {
        "gray": "#EEE",
        "red": "#FF1F00",
      },
    },
  },
  plugins: [],
};
