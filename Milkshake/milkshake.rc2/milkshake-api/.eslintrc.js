module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:testing-library/react',
        'plugin:jest/all'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            presets: [
                '@babel/preset-react'
            ]
        }
    },
    rules: {}
}
