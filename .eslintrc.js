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
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'semi': ['error', 'always'],
        'no-empty': 0,
        'comma-dangle': 0,
        'no-unused-vars': 0,
        'no-console': 0,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-case': 2,
        'no-extra-parens': [2, 'functions'],
        'no-self-compare': 2,
        'accessor-pairs': 2,
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'constructor-super': 2,
        'new-cap': [2, {
            'newIsCap': true,
            'capIsNew': false
        }],
        'jsx-quotes': 0,
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-class-assign': 2,
        'no-cond-assign': 2,
    }
};
