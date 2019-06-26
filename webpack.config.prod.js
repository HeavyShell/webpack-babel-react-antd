var path = require('path')
//var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:[
		'babel-polyfill',
		'./src/index.js',		
	],
	output:{
		path:path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				loaders:['style-loader','css-loader']
			},
			{
				test:/\.scss$/,
				loaders:['style-loader','css-loader','sass-loader']
			},
			{
				test:/\.less$/,
				use:[
					{
						loader:'style-loader',
					},
					{
						loader:'css-loader',
						options: {
              modules: {
								mode: 'local',
								localIdentName: '[name]-[local]-[hash:base64:10]',
							},
          	},
					},
					{
						loader:'less-loader',
					}
				]
			},
			{
				test:/\.(jpg|png)$/,
				loaders:['url-loader']
			},
			{
          test:/\.js$/,
          exclude:/(node_modules)/,//排除掉node_module目录
          use:{
              loader:'babel-loader',
              options:{
								presets:['@babel/preset-env','@babel/preset-react'], //转码规则
								plugins:[
									"@babel/plugin-transform-runtime",
									"@babel/plugin-proposal-class-properties",
									["import", {
										"libraryName": "antd",
										"libraryDirectory": "es",
										"style": "css" // `style: true` 会加载 less 文件
									}]
								]
              }
          }
      }
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
		  template: './src/index.html'
		})
	]
}