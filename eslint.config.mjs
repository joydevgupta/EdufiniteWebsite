import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier'; // Default import returns an object, not an array

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // Recommended JS rules
  pluginJs.configs.recommended,
  // Recommended React rules
  pluginReact.configs.flat.recommended,
  // JSX runtime support for React 17+
  pluginReact.configs.flat['jsx-runtime'],
  // Add Prettier config last without spreading
  prettier,
];
