/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@repo/tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#E8E8E8",
      },
    },
  },
};
