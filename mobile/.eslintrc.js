module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'jest', 'simple-import-sort'],
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  overrides: [
    {
      files: [
        'src/**/*.spec.ts',
        'src/**/*.test.ts',
        'src/**/__mocks__/*.ts',
        'src/**/*.spec.js',
        'src/**/*.test.js',
        'src/**/__mocks__/*.js',
      ],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      env: {
        'jest/globals': true,
      },
      rules: {
        'jest/no-try-expect': 'off',
        'jest/no-conditional-expect': 'off',
      },
    },
  ],
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'id-denylist': [
      'error',
      'any',
      // 'Number',
      'number',
      // 'String',
      'string',
      // 'Boolean',
      'boolean',
      // 'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'no-duplicate-imports': 'off',
    'no-eval': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-redeclare': 'off',
    'no-restricted-imports': [
      'error',
      {
        // disallow relative imports
        patterns: ['.*'],
      },
    ],
    'no-self-compare': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    yoda: 'error',

    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],

    'import/no-unresolved': 'off',

    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports
          ['^\\u0000'],

          // External packages
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],

          // Internal modules
          ['^src/utils(/|$)'],
          ['^src/'],

          // Anything not matched in another group.
          ['^'],

          // Relative (parent) imports
          ['^\\.\\.'],

          // Relative (sibling) imports
          ['^\\.'],
        ],
      },
    ],
  },
};
