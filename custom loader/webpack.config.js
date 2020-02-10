const path = require("path")
const webpack = require("webpack")

module.exports = {
    mode:"development",
    entry:{
        main: "./src/index.js"
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "build.js"
    },
    devServer: { //ricorda di installare il pacchetto
        port: 3002,
        contentBase: path.join(__dirname, "dist"),
        hot: true // mi salva lo stato con l'hot reloading
    },
    plugins: [ 
        new webpack.HotModuleReplacementPlugin()
    ],
    resolveLoader:{ //con questo parametro esplicito come risolvere i loaders
        modules:["node_modules", path.resolve(__dirname, "loaders")]
    },
    module:{
        rules:[ 
            {
               test: /\.music/,
               use: "musicLoader"
            }
        ]
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