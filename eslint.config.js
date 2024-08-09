import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "no-unused-vars": "error"
    }
  },
  {
    ignores: [
      "node_modules/**/*",
      "/.next",
      "/dist",
      "/build",
      "/src/__mock__",
      "/src/__test__",
      "*.scss",
      "*.css",
      ".husky/"
    ]
  }
];