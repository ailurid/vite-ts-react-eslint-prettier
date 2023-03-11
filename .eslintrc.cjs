module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // project: ["./tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/quotes": [1, "double", { avoidEscape: true }],
    "arrow-body-style": ["off", "always"],
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "function-paren-newline": ["off", "never"],
    "implicit-arrow-linebreak": "off",
    "import/extensions": ["error", "ignorePackages", { ts: "never", tsx: "never" }],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "linebreak-style": "off",
    "max-len": ["warn", { code: 120 }],
    "no-param-reassign": "off",
    "no-shadow": "off",
    "no-underscore-dangle": ["error", { allowAfterThis: true }],
    "no-use-before-define": "off",
    "object-curly-newline": ["error", { multiline: true, consistent: true }],
    "object-shorthand": ["off", "always"],
    "operator-linebreak": "off",
    "prefer-destructuring": "off",
    "react/destructuring-assignment": ["off", "never"],
    "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
    "react/jsx-boolean-value": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    indent: "off",
    quotes: "off"
  },
  settings: {
    "import/extensions": [".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      // typescript: {},
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    }
  }
};
