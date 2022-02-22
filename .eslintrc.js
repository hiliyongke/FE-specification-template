module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
};
