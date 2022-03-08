const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports = {
       mode: 'development',
       entry:{
          home: path.resolve(__dirname, "src/components/index.js"),
          portfolio: path.resolve(__dirname, "src/components/portfolio.js"),
          about: path.resolve(__dirname, "src/components/about.js"),
          contact: path.resolve(__dirname, "src/components/contact.js"),

       },
       output:{
          path: path.resolve(__dirname, "dist"),
          filename: "[name].[contenthash].js",
          clean: true,
       },
       devtool: "inline-source-map",
       devServer:{
           static: path.resolve(__dirname, 'dist'),
           watchFiles: [path.resolve(__dirname, 'src')],
           open: true,
           hot: true,

       },
       //loaders
       module:{
          rules:[
             //css
             {test: /\.css$/, use: ["style-loader", "css-loader"]},
             //images
             { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource', },
             //js for babel
             {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
          ]
       },
       //plugins
       plugins:[ new HtmlWebpackPlugin({
          filename: "index.html",
          template: path.resolve(__dirname, "src/temps/index.html"),
          chunks: ['home'],
          inject: true,
       
       }),
       new HtmlWebpackPlugin({
         filename: "portfolio.html",
         template: path.resolve(__dirname, "src/temps/portfolio.html"),
         chunks: ['portfolio'],
         inject: true,
      
      }),
      new HtmlWebpackPlugin({
         filename: "about.html",
         template: path.resolve(__dirname, "src/temps/about.html"),
         chunks: ['about'],
         inject: true,
      
      }),
      new HtmlWebpackPlugin({
         filename: "contact.html",
         template: path.resolve(__dirname, "src/temps/contact.html"),
         chunks: ['contact'],
         inject: true,
      
      }),
      
   ],
}