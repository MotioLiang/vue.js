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
  globals: {
    'document': true,
    'localStorage': true,
    'sessionStorage': true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // js单引号
    quotes: ['warn', 'single'],
    // 缩进风格
    indent: ['error', 4, {
      'SwitchCase': 1
    }],
    //  结尾不要分号
    semi: ['error', 'never'],
    // 禁用 eval()
    "no-eval": 2,
    'vue/attribute-hyphenation': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': 'warn',
    'vue/html-end-tags': 'warn',
    'vue/html-indent': ['warn', 4],
    'vue/html-quotes': 'warn',
    'vue/html-self-closing': 'warn',
    'vue/max-attributes-per-line': ['warn', {
      "singleline": 2
    }],
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/name-property-casing': 'warn',
    'vue/no-multi-spaces': 'warn',
    'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
    'vue/no-template-shadow': 'warn',
    'vue/prop-name-casing': 'warn',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'warn',
    'vue/singleline-html-element-content-newline': 'warn',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn'
  }
}
