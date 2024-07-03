import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    // ignores: ["**/temp.js", "config/*"],
    languageOptions: {
      parserOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        project: ["tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-confusing-void-expression": "off",
      // "@typescript-eslint/no-empty-function": "off",
      // "@typescript-eslint/no-unnecessary-condition": "off",
      // "@typescript-eslint/no-unused-vars": "warn",
    },
    // settings: {
    //   "import/resolver": {
    //     node: {
    //       extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    //     },
    //   },
    // },
  }
);
