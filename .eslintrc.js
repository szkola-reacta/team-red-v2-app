module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    "prettier",
    "react-app",
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["unused-imports"],
  rules: {
    semi: 2,
    quotes: [2, "double"],
    "no-undef": 0,
    "no-shadow": 0,
    "arrow-body-style": 0,
    "no-nested-ternary": 2,
    "no-confusing-arrow": 0,
    "no-trailing-spaces": 2,
    "unused-imports/no-unused-imports": 1,
    "jsx-quotes": ["error", "prefer-double"],
    "react/function-component-definition": 0,
    "react/jsx-filename-extension": [0, { extensions: [".js", ".jsx"] }],
  },
};
