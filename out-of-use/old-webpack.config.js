const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    entry: './js/faq.js',
    mode: "development",
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            generator: (content) => svgToMiniDataURI(content.toString()),
                        },
                    },
                ],
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
};
