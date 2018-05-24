// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  globals: {
    describe: false,
    it: false,
    before: false,
    beforeEach: false,
    after: false,
    afterEach: false,
    expect: false
  },
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'max-len': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
    'no-plusplus': 0,
    quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
    'global-require': 0,
    'no-param-reassign': 0,
    'no-multi-assign': 0,
    'default-case': 0,
    'consistent-return': 0,
    'arrow-body-style': 0,
    'no-unneeded-ternary': 0,
    'no-else-return': 0,
    'no-underscore-dangle': 0,
    'no-case-declarations': 0,
    'no-cond-assign': 0,
  }
}
