module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
  ],
  overrides: [
    {
      files: ['**/*.stories.*'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
}; 