// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        es6: true,
        commonjs: true,
        browser: true,
    },
    extends: [
        // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
        'standard',
        // https://github.com/feross/eslint-config-standard-react
        'standard-react'
    ],
    // https://github.com/yannickcr/eslint-plugin-react
    plugins: [
        'react',
        'babel',
        'promise'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'ignore'
        }],
        // allow async-await
        'generator-star-spacing': 0,
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
            }
        ],
        'object-curly-spacing': ["error", "always"],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'prefer-promise-reject-errors': 'off',
        'react/prop-types': 'off',
        'react/jsx-tag-spacing': [
            2,
            {
                'closingSlash': 'never',
                'beforeSelfClosing': 'never',
                'afterOpening': 'never'
            }
        ],
        'react/jsx-curly-spacing': [2, { 'when': 'always', 'allowMultiline': true }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'semi': 0,
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'never'
        }],
    }
};
