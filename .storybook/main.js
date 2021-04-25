module.exports = {
  stories: [
    "../src/atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/molecules/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/organisms/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/templates/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
  ],
};
