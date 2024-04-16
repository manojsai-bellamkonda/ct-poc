/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: "./app",
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
