const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.[hash].js"
    },
    devServer: { //ricorda di installare il pacchetto
        port: 3002,
        contentBase: path.join(__dirname, "dist"),
        hot: true // mi salva lo stato con l'hot reloading
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "public", "index.html"),
            filename: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", //Inserisce lo stile nel dom
                    "css-loader"] //converte il css in commonjs
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css']      
    }
}

/*
Output
    placeholders -> [hash] [chunkhash] [name] [id] [query] [contenthash]
    [contenthash] -> è comodo per il caching dei file es. [name].[contenthash].js

    posso creare librerie con  -> library: 'nome'
    e posso impostare il target con libraryTarget:'something' (per esempio commonjs, amd, var etc)
    umd mi fa un export che funziona con praticamente tutto

*/