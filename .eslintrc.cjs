// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-airbnb-typescript",
        "plugin:react-hooks/recommended",
        "eslint-config-prettier",
        "plugin:react/jsx-runtime",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/no-unescaped-entities": ["off"],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "import/ignore": "off",
    "react/display-name": "off",
    "no-duplicate-imports": "error",
    camelcase: "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    "no-param-reassign": ["error", { props: false }],
    "no-shadow": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "prefer-template": "error",
    "sort-imports": 0,
    "spaced-comment": ["error", "always", { markers: ["/"] }],
  },
};

module.exports = config;
