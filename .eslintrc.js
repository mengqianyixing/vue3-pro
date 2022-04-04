// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
    root: true,
    env: {
        browser: true,
        node: true,
        amd: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 2021,
    },
    rules: {
        eqeqeq: ['warn', 'always', { null: 'never' }],
        'no-debugger': ['error'],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-process-exit': 'off',
        'no-useless-escape': 'off',
        'prefer-const': [
            'warn',
            {
                destructuring: 'all',
            },
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/multi-word-component-names': 'off',
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        // 'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'parent',
                    'directives',
                    'components',
                    'extends',
                    'mixins',
                    'data',
                    'props',
                    'computed',
                    'filters',
                    'methods',
                    'watch',
                    ['template', 'render'],
                    'LIFECYCLE_HOOKS',
                    'errorCaptured',
                ],
            },
        ],
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'CONDITIONALS',
                    'LIST_RENDERING',
                    'RENDER_MODIFIERS',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'DEFINITION',
                    'GLOBAL',
                    'UNIQUE',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
            },
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            },
        ],
        'vue/no-unused-components': 'error',
        'vue/require-default-prop': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-function': [
            'error',
            { allow: ['arrowFunctions'] },
        ],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // maybe we should turn this on in a new PR
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off', // maybe we should turn this on in a new PR
        '@typescript-eslint/no-unused-vars': 'off', // maybe we should turn this on in a new PR
        '@typescript-eslint/no-var-requires': 'off',
        'prettier/prettier': 'error',
    },
    plugins: ['vue', 'prettier'],
    overrides: [],
})
