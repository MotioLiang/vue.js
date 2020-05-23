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
        document: true,
        localStorage: true,
        sessionStorage: true
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // js单引号
        'quotes': ['warn', 'single'],
        // 缩进风格
        'indent': ['error', 4, {
            SwitchCase: 1
        }],
        //  结尾不要分号
        'semi': ['error', 'never'],
        // 禁用 eval()
        'no-eval': 'error',
        'vue/attribute-hyphenation': 'error',
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-end-tags': 'error',
        'vue/html-indent': [
            'warn',
            4
        ],
        'vue/html-quotes': 'error',
        'vue/html-self-closing': 'error',
        'vue/max-attributes-per-line': 'error',
        'vue/multiline-html-element-content-newline': 'warn',
        'vue/mustache-interpolation-spacing': 'warn',
        'vue/name-property-casing': 'warn',
        'vue/no-multi-spaces': 'warn',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/no-template-shadow': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'warn',
        'vue/require-prop-types': 'error',
        'vue/singleline-html-element-content-newline': 'error',
        'vue/v-bind-style': 'error',
        'vue/v-on-style': 'error',
        'vue/attributes-order': 'warn',
        'vue/no-confusing-v-for-v-if': 'warn',
        'vue/no-v-html': 'warn',
        'vue/order-in-components': 'warn',
        'vue/this-in-template': 'error'
    }
}
