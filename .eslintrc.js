module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parser: "babel-eslint",
  settings: {
    react: {
      version: "17.0.2"
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["prettier", "react", "react-native"],
  rules: {
    quotes: ["error", "double"],
    "no-console": 0,
    "react/jsx-wrap-multilines": [
      "error",
      {declaration: false, assignment: false},
    ],
    "react/jsx-props-no-spreading": 0,
    "import/no-named-as-default": 0,
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsForRegex: ["^memo", "^keep", "^remember"],
      },
    ],
  },
};
