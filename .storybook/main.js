const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@react-theming/storybook-addon',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = `${rootPath}/src`
    return config
  },
}
