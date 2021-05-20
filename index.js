const eslintConfig = require('conventional-changelog-eslint');

module.exports = function getEslintConfig() {
  let returnedConfig = {};
  eslintConfig((error, config) => {
    if (error) {
      throw new Error('An error ocurred loading conventional-changelog-eslint');
    }
    returnedConfig = config;
  });
  return returnedConfig;
}
