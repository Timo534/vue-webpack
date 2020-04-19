const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: path.join(__dirname, 'src/main.js'),
  // 输出文件位置
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'vue-project.bundle.js'
  },
  // 模块的解析规则
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
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
        use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader', 'postcss-loader' ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            esModule: false,
            name: '[name]-[hash].[ext]',
            publicPath: 'dist/assets/images/',
            outputPath: 'assets/images/'
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
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ]
}