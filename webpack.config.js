const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: 8000,
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env" /* to transfer any advansed ES to ES5 */,
                "@babel/preset-react",
                "@babel/preset-typescript",
              ], // to compile react to ES5
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app3",
      filename: "remoteEntry.js",
      exposes: {
        "./App3LoginForm": "./src/App3LoginForm",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
