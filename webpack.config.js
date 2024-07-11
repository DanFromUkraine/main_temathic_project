const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    artist_page: "./src/pages/artist_page/artist_page.js",
    connect_wallet: "./src/pages/connect_wallet/connect_wallet.js",
    create_account: "./src/pages/create_account/create_account.js",
    marketplace: "./src/pages/marketplace/marketplace.js",
    NFT_page: "./src/pages/NFT_page/NFT_page.js",
    rankings: "./src/pages/rankings/rankings.js",
    success_page: "./src/pages/success_page/success_page.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  devtool: "source-map",
  devServer: {
    hot: true,
    open: "index.html", 
    },
  module: {
    rules: [
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
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.handlebars$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
    }),

    new CopyPlugin({
      patterns: [{ from: "./src/assets", to: "img" }],
    }),
    new HtmlWebpackPlugin({
      title: "artist_page",
      template: "./src/pages/artist_page/artist_page.html",
      filename: "artist_page.html",
      chunks: ["artist_page"],
    }),
    new HtmlWebpackPlugin({
      title: "connect_wallet",
      template: "./src/pages/connect_wallet/connect_wallet.html",
      filename: "connect_wallet.html",
      chunks: ["connect_wallet"],
    }),
    new HtmlWebpackPlugin({
      title: "create_account",
      template: "./src/pages/create_account/create_account.html",
      filename: "create_account.html",
      chunks: ["create_account"],
    }),
    new HtmlWebpackPlugin({
      title: "marketplace",
      template: "./src/pages/marketplace/marketplace.html",
      filename: "marketplace.html",
      chunks: ["marketplace"],
    }),
    new HtmlWebpackPlugin({
      title: "NFT_page",
      template: "./src/pages/NFT_page/NFT_page.html",
      filename: "NFT_page.html",
      chunks: ["NFT_page"],
    }),
    new HtmlWebpackPlugin({
      title: "rankings",
      template: "./src/pages/rankings/rankings.html",
      filename: "rankings.html",
      chunks: ["rankings"],
    }),
    new HtmlWebpackPlugin({
      title: "success_page",
      template: "./src/pages/success_page/success_page.html",
      filename: "success_page.html",
      chunks: ["success_page"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    
  ],
  performance: {
    hints: false,
  }
};
