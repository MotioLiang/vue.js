module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  'globals': {
    'document': true,
    'localStorage': true,
    'sessionStorage': true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // js单引号
    "quotes": [1, "single"],
    // 缩进风格
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    //  结尾不要分号
    'semi': [2, 'never'],
    // 禁用 eval()
    "no-eval": 2
  }
}
