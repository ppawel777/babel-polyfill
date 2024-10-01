const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: ['whatwg-fetch', './src/index.js'],
   // mode: 'development',
   mode: 'production',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  // presets: ['es2015']
                  presets: ["@babel/preset-env"],
               },
            },
         },
      ],
   },
   
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
      }),
   ],
   //   devServer: {
   //     static: {
   //       directory: path.join(__dirname, 'dist'), // Каталог для статики
   //     },
   //     open: true, // Автоматически открывать браузер
   //   },
};