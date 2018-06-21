"use strict";

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".ts", ".vue", ".js"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    entry: {
        "index": path.resolve(__dirname, "src/index.ts")
    },

    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: path.resolve(__dirname, "tsconfig.json"),
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.s?css$/,
                loaders: [
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(), // this is REQUIRED plugin
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        })
    ],
    devServer: {
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
};