const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  // devServer: { historyApiFallback: true, contentBase: './' },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/'),
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      // {
      //   // test: /\.tsx?$/,
      //   test: /\.(jsx|js)$/,
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, 'src/'),
      //   use:
      //   {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', {
      //           targets: 'defaults',
      //         }],
      //         '@babel/preset-react',
      //       ],
      //     },
      //   },
      //   resolve: {
      //     extensions: ['', '.js', '.jsx'],
      //   },
      // },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|fbx|obj|bin|gltf|glb)$/i,
        type: 'asset/resource',
        // include: path.resolve(__dirname, 'src/models'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: "./src/images/favicon.ico",
    }),
    new TsconfigPathsPlugin(),
    new FaviconsWebpackPlugin('./src/images/logo.svg'),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
