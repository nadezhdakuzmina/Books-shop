const path = require('path');

module.exports = {
  plugins: {
    'postcss-prepend-imports': {
      path: path.resolve(__dirname, 'src/assets/styles'),
      files: ['variables.css'],
    },
    'postcss-import': {
      skipDuplicates: true,
      path: [path.resolve(__dirname, 'src/assets/')],
    },
    'postcss-extend-rule': {},
    'postcss-preset-env': {
      stage: 0,
      preserve: true,
      features: {
        'custom-properties': false,
      },
      autoprefixer: {},
    },
    'postcss-css-variables': {
      preserve: true,
    },
    'postcss-calc': {},
    'postcss-color-function': {
      preserveCustomProps: false,
    },
  },
};
