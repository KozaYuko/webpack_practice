const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'main.js',
    },
    module:{
        rules:[
            {
                test: /\.css/,//ファイル名を検知　\は、エスケープ
                use:[
                    {
                        loader:'style-loader',
                    },
                    {
                        loader:'css-loader',
                    },
                ],
            },
        ],
    },
}
