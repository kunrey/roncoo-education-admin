module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended'
    ],
    rules: {}
}