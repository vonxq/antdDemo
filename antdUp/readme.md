一个Tabs嵌套实例，实现了antd样式的按需加载
## 使用
```javascript
yarn
npm run dev
```
## 实现按需加载antd样式
1. 使用[babel-pligin-import](https://github.com/ant-design/babel-plugin-import)插件，按官方说明配置.babelrc
```
{
  "presets": ["react", "es2015"],
  "plugins": [["import", { "libraryName": "antd", "style": "css" }]]
}
```
2. 配置webpack的css loader和style loader，记得在css-loader的include加入antd目录，无include字段会默认对所有文件打包
```javascript
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, './out'),
        filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader?cacheDirectory=true'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/antd')],
        }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'out')
    }
};   
```