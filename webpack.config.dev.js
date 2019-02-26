const config = require("./webpack.config.base");
const merge = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",
  devServer: {
    port: 3000,
    open: true
  },
  devtool: "source-map"
});
