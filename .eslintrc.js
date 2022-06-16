module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ["plugin:prettier/recommended", "airbnb", "airbnb/hooks", "react-app", "plugin:react/jsx-runtime"],
  plugins: ["prettier", "unused-imports"],
  rules: {
    semi: 2,
    quotes: [2, "double"],
    "no-undef": 0,
    "no-shadow": 0,
    "arrow-body-style": 0,
    "no-nested-ternary": 2,
    "no-trailing-spaces": 2,
    "unused-imports/no-unused-imports": 1,
    "jsx-quotes": ["error", "prefer-double"],
    "react/function-component-definition": 0,
    "react/jsx-filename-extension": [0, { extensions: [".js", ".jsx"] }],
  },
};
