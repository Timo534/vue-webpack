const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: devMode ? 'development' : 'production',
  // 入口文件
  entry: {
    learn: './src/learn/main.ts',
    task: './src/task/main.ts'
  },
  // 输出文件位置
  output: {
    publicPath: '../',
    path: path.join(__dirname, 'dist'),
    filename: '[name]/[name].[contenthash].bundle.js',
    chunkFilename: 'assets/js/[contenthash].js'
  },
  // 模块的解析规则
  resolve: {
    extensions: ['.ts', '.js', '.json', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src')
    }
  },
  // 配置module
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../../'
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '/public/path/to/'
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../../'
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '/public/path/to/'
            }
          },
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            esModule: false,
            name: 'assets/images/[name]-[hash].[ext]',
            publicPath: '../'
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  devtool: devMode ? 'inline-source-map' : '',
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'manifest' // 将 webpack 的 runtime 代码拆分为一个单独的 chunk。
    },
    splitChunks: {
      minSize: 1,
      chunks: 'initial',
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        common: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      // chunkFilename: 'assets/css/[id].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/learn/index.html',
      filename: 'learn/index.html',
      inject: 'body',
      chunks: ['learn'],
      hot: true,
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: './src/task/index.html',
      filename: 'task/index.html',
      chunks: ['task'],
      inject: 'body',
      hot: true,
      minify: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
    // open: true
  }
}
