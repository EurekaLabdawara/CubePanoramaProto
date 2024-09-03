const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "public"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      //   {
      //     test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/i,
      //     type: "asset/resource",
      //   },
      //   {
      //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //     type: "asset/resource",
      //   },
      //   {
      //     test: /\.(glb|gltf)$/i,
      //     type: "asset/resource",
      //   },
      //   {
      //     test: /\.(mp3)$/i,
      //     type: "asset/resource",
      //   },
      //   {
      //     test: /\.(mp4)$/i,
      //     type: "asset/resource",
      //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Cube Panorama Demo",
      filename: "index.html",
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/assets" },
        { from: "./src/styles/style.css", to: "style.css" },
        { from: "./src/vendor", to: "vendor" },
        { from: "./src/data.js", to: "data.js" },
      ],
    }),
  ],
};
