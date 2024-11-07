const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  mode: "development", // или "production"
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, ".env"),
    }),
  ],
  devtool: false, // Отключаем карты исходного кода
};
