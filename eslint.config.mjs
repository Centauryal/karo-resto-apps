import globals from 'globals';
import jasmine from 'eslint-plugin-jasmine';
import codeceptjs from 'eslint-plugin-codeceptjs';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: ['dist/', 'node_modules/', '**/outputs/', 'webpack.*.cjs', 'server.js', 'sharp.js', 'karma.conf.js'],
  },
  // Main source code config
  {
    files: ['src/**/*.js', 'specs/**/*.js', 'e2e/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    plugins: {
      jasmine,
      codeceptjs,
      import: importPlugin,
    },
    rules: {
      // Codeceptjs plugin adds its own globals via environments
      ...codeceptjs.configs.recommended.rules,

      // Jasmine rules
      'jasmine/no-suite-dupes': 'warn',
      'jasmine/no-spec-dupes': 'warn',

      // Import rules
      'import/no-extraneous-dependencies': 0,
      'import/prefer-default-export': 0,
      'import/first': 'warn',
      'import/no-duplicates': 'warn',

      // General rules (from airbnb-base style)
      'no-console': 0,
      'no-underscore-dangle': 0,
      'no-restricted-globals': 0,
      'linebreak-style': 0,
      'consistent-return': 0,
      'no-prototype-builtins': 0,
      'no-return-assign': 0,
      'class-methods-use-this': 0,
      'no-new': 0,
      'no-plusplus': 0,
      'no-await-in-loop': 0,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-duplicate-imports': 'error',
      'prefer-arrow-callback': 'warn',
      'no-trailing-spaces': 'warn',
      'eol-last': ['error', 'always'],
      'semi': ['error', 'always'],
      'quotes': ['warn', 'single', { avoidEscape: true }],
    },
  },
];
