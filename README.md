### webpack+babel+react+antd 基础demo，可用于学习构建项目，本项目所用仅为基础的配置，高级拓展可自行开发。

============================================================================

#### 其中包含了：

##### 1 样式加载器css，sass，less

##### 2 图片加载器

##### 3 webpack-dev-server本地开发热更新

##### 4 babel配置：

（1）babel：解决不支持语法转义es6转义为es5

cnpm i --save-dev babel-loader @babel/core @babel/preset-env

（2）babel-polyfill：低版本浏览器中的不支持API，例如findIndex

cnpm i --save-dev babel-polyfill

（3）babel-plugin-transform-runtime: 解决打包体积过大的问题

cnpm i --save-dev @babel/plugin-transform-runtime

cnpm i --save @babel/runtime

在打包的过程中，babel会在包里提供一些工具函数，而这些工具函数可能会重复的出现在多个模块。这样会导致打包的体积过大，所以babel提供了babel-transform-runtime解决这个体积过大的问题

============================================================================

#### 构建react项目，在以上基础上：

##### 1 若要构建react项目：

安装@babel/preset-react，识别编译react

cnpm i --save-dev @babel/preset-react

安装react-dom

cnpm i --save react react-dom 

安装@babel/plugin-proposal-class-properties：编译器，组件内部es6函数识别

cnpm i --save-dev @babel/plugin-proposal-class-properties

##### 2 css-module模块化

css-loader配置中增加

modules:{
    mode: 'local',
    localIdentName: '[name]-[local]-[hash:base64:10]'
}

##### 3 react路由设置：

cnpm i --save react-router-dom （无需使用react-router）

（1）开发环境二级路由刷新页面后无法访问，需要在devServer中配置：

historyApiFallback: true, 并且 output中配置：publicPath: '/', 目的使/bundle.js为绝对路径

##### 4 redux设置：

cnpm i --save redux react-redux

cnpm i --save immutable axios 用户数据处理

##### 5 增加antd样式库

cnpm i --save antd

cnpm i --save-dev babel-plugin-import 

antd默认为英文，故这里顺便做下语言国际化，支持：中文，英文，繁体（见代码）

##### 6 语言国际化切换

提到国际化，这里顺便补充下组件react-intl

cnpm i --save react-intl

具体用法此处不再重复，请参考博客：https://blog.csdn.net/xw505501936/article/details/80625626


============================================================================


#### 使用：

1 下载包解压，进入目录

2 安装 npm i 或 cnpm i

3 运行 npm run dev 启动后访问https://127.0.0.4:8088/

4 打包 npm run build
