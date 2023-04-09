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
    "@typescript-eslint/prefer-for-of": "warn",
    "multiline-comment-style": "off",
    "arrow-body-style": ["error", "as-needed"],
    curly: ["error", "all"],
    "dot-notation": ["error"],
    eqeqeq: ["error", "always"],
    "no-confusing-arrow": ["error"],
    "no-else-return": ["error"],
    "no-extra-boolean-cast": ["error"],
    "no-extra-semi": ["error"],
    "no-floating-decimal": ["error"],
    "no-implicit-coercion": [
      "error",
      {
        allow: ["!!"],
      },
    ],
    "no-lonely-if": ["error"],
    "no-undef-init": ["error"],
    "no-unneeded-ternary": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-rename": ["error"],
    "no-useless-return": ["error"],
    "no-var": ["error"],
    "object-shorthand": ["error"],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": ["error"],
    "prefer-const": ["error"],
    "prefer-destructuring": ["error"],
    "prefer-numeric-literals": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-object-spread": ["error"],
    "prefer-spread": ["error"],
    "quote-props": ["error", "as-needed"],
    "prefer-exponentiation-operator": ["error"],
    yoda: ["error", "never"],
    "dot-location": ["error", "property"],
    "no-useless-concat": "error",
    "no-template-curly-in-string": "error",
    "no-multi-str": "error",
  },
};

module.exports = config;
