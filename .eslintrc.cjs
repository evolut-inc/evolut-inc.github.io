module.exports = {
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
    },
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "tsconfig.json",
      },
    },
  ],
  plugins: ["@typescript-eslint"],
  extends: ["plugin:astro/recommended", "prettier"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
