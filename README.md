# 手写一个webpack配置跑起vue项目
## 目前功能
* css预处理器sass、scss
* 为css自动添加前缀，可以使用最新的css语法
* es6转es5
* 自动生成html入口文件
* 每次打包之前自动清除输出文件
* 可以启动本地服务器，支持热替换和调试源码
* css分离打包

## 新增的功能
* 支持typescript语法
* 使用eslint

## 后续计划
* 可以打包多应用
* 尝试各种优化，比如抽离公用代码和第三方库、按需加载等

#### 开启runtimeChunk选项
作用：当一个文件动态引入一个文件时，修改动态引入的文件内容，这个文件的hash不会改变
```
optimization: {
  runtimeChunk: {
    name: 'manifest' // 将 webpack 的 runtime 代码拆分为一个单独的 chunk。
  }
}
```

#### 提取第三方库和公用业务代码
```
optimization: {
    splitChunks: {
        cacheGroups: {
            vendor: {
                name: 'chunk-vendors',
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                chunks: 'initial'
            },
            common: {
                name: 'chunk-common',
                minChunks: 2,
                priority: -20,
                chunks: 'initial',
                reuseExistingChunk: true
            }
        }
    }
}
```

#### 减少 ES6 转为 ES5 的冗余代码
不需要重复编译helper函数，直接引用@babel/runtime中对应的代码
```
yarn add -D @babel/plugin-transform-runtime @babel/runtime

//在 .babelrc 文件中
"plugins": [
    "@babel/plugin-transform-runtime"
]
```