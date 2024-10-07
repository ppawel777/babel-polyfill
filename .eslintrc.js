// eslint-disable-next-line no-undef
module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   overrides: [
      {
         files: [ "src/**/*.js" ],
         extends: [
            'eslint:recommended',
            'plugin:prettier/recommended',
         ],
         rules: {
            'prettier/prettier': [
               'warn',
               {
                  endOfLine: 'auto',
               },
            ],
            'no-unused-vars': [
               'error',
            ],
            semi: 'off',
            'no-debugger': 'error',
            'no-console': [
               'warn',
               {
                  allow: ['off', 'error'],
               },
            ],
            'linebreak-style': ['off', 'windows'],
            quotes: ['warn', 'single'],
            'max-len': [
               'warn',
               {
                  ignoreComments: true,
                  code: 124,
               },
            ],
         },
      },
   ],
}
