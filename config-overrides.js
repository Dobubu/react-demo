const {
  override,
  disableEsLint,
  addBabelPlugin,
} = require('customize-cra')

module.exports = override(
  disableEsLint(),
  addBabelPlugin('transform-react-pug')
)