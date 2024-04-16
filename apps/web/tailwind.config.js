/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@repo/tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content : [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ]
}