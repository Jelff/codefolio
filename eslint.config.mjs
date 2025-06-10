import parser from "@typescript-eslint/parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      "react": pluginReact,
      "jsx-a11y": pluginJsxA11y,
      "deprecate": pluginDeprecate 
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "semi": ["warn", "always"],
      "quotes": ["warn", "double"],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "react/prop-types": "off",
      "jsx-a11y/anchor-is-valid": "warn",

      
      "deprecate/function": [
        "error",  
        {
          "name": "oldFunction", 
          "use": "newFunction"    
        }
      ],
      "deprecate/import": [
        "error",
        {
          "name": "old-package",
          "use": "new-package"
        }
      ]
    }
  }
];
