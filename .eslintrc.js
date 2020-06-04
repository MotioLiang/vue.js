module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
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
        'vue/html-indent': ['warn', 4]
    }
}
