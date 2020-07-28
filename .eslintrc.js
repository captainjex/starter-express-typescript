module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    quotes: ['error', 'single'],
    indent: ['error', 2],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'import/first': 'error',
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/newline-after-import': 'error',
    'no-trailing-spaces': 'error',
    'comma-dangle': ['error', 'always-multiline'],
  },
  'overrides': [
    {
      files: ['src/**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
    },
    {
      files: ['views/resources/**/*.js'],
      'parser': 'babel-eslint',
      'parserOptions': {
        'sourceType': 'module',
        'allowImportExportEverywhere': true,
      },
    },
  ],
  env: {
    es6: true,
    node: true,
  },
};
