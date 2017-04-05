/**
 * Created by Grandomics7052 on 2017/3/2.
 */
var path = require('path');
module.exports = {
    entry: "./main.js", //入口文件
    output: {
        path: __dirname,
        filename: "bundle.js" //输出文件，只需要引入这个就行
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}