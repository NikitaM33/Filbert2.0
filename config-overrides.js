const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@api': 'src/api',
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@redux': 'src/redux'
  })(config);

  return config;
}
