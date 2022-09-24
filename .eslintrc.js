module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        printWidth: 80,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: [2, 'single', 'avoid-escape'],
    // "arrow-body-style": "off",
    // "prefer-arrow-callback": "off",
    // "no-unused-vars": ["error", { vars: "local", args: "none" }],
    'react/prop-types': 'off',
    'global-require': 0,
  },
  settings: {
    // "import/resolver": {
    //   alias: {
    //     map: [["@", "./client/src"]],
    //     extensions: [".js", ".jsx"],
    //   },
    // },
  },
};
