
var path = require('path');

var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    // entry: {
    //     Entry1: 'webpack/hot/dev-server',
    //     Entry2: 'webpack-dev-server/client?http://localhost:3001',
    //     Entry3: path.resolve(__dirname,'src/index.js'),
    // },
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3001',
        path.join(__dirname,'src/index.js'),
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react','stage-0','stage-1','stage-2','stage-3']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            // {
            //     test: /\.scss$/,
            //     loader: 'style!css!sass'
            // },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000&name=img/[name].[ext]'
            }

        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss', '.jsx'],
    },
    plugins: [
        //windows
        // new OpenBrowserPlugin({ url: 'http://localhost:3001',browser:"chrome" })
        //linux
        new OpenBrowserPlugin({ url: 'http://localhost:3001'})
    ]

}




















































