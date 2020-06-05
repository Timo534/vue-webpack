const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  // 入口文件
  entry: {
    learn: './src/learn/main.ts',
    task: './src/task/main.ts'
  },
  // 输出文件位置
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]/[name].[hash].bundle.js'
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
              publicPath: '../../'
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
              publicPath: '../../'
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
    splitChunks: {
      name: 'common'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/learn/index.html',
      filename: 'learn/index.html',
      inject: 'body',
      chunks: ['learn'],
      hot: true
    }),
    new HtmlWebpackPlugin({
      template: './src/task/index.html',
      filename: 'task/index.html',
      chunks: ['task'],
      inject: 'body',
      hot: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
    // open: true
  }
}
