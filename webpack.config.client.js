const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png|woff2|woff)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/i,
                use: [
                  {loader:'style-loader',
                  
                },
                {
                    loader:'css-loader',
                    
            },
                ],
            },
            {
                test: /\.scss$/i,

                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
        ]
    },  plugins: [
          new webpack.HotModuleReplacementPlugin(),
          
        //   new HtmlWebpackPlugin({
        //       favicon:'client/assets/images/favicon.ico'
        //   })
      ],
      resolve: {
        extensions: [".tsx", ".ts", ".js", "scss"]
    },
    
}

module.exports = config
