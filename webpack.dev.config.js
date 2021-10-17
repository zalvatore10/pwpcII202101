const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//Importando  el ESLINT
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
// 0. establecer el modo del configurador
mode: 'development',
// 1. especificando el archivo de entrada
entry: './client/index.js',
// 2. especificando la salida
output: {
// 3. ruta absoluta de la salida
path: path.join(__dirname, 'public'),
// 4 . nombre de la ruta de salida
filename: 'js/bundle.js',
// 5. ruta del paht publico para fines del servidor de desarrollo
publicPath: '/'
},
devServer: {
static: path.join(__dirname, 'public'),
port: process.env.PORT || '3000',
host: 'localhost'
},
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules | bower_components)/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    'modules': false,
                                    'useBuiltIns': 'usage',
                                    'targets': {"chrome": "80"},
                                    'corejs': 3
                                }
                            ]
                        ],
                        "plugins": [
                            [
                                "module-resolver",
                                {
                                    "root": ["./"],
                                    "@alias":{
                                        "@client" : "./client",
                                    }
                                }
                            ]
                        ]
                    }
                }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
    ]
},
plugins: [
    new MiniCssExtractPlugin({
        filename: 'style/app.css'
    }),
    new EslintWebpackPlugin()
]
}
