module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
    eqeqeq: 'error',
    'prefer-template': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'hack'], location: 'anywhere' }],
    '@typescript-eslint/array-type': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc' },
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
  },
}
