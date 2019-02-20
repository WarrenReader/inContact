const config = require("./webpack.config.base");
const merge = require("webpack-merge");

module.exports = merge(config, {
  mode: "development"
});
