// vue.config.js

module.exports = {
	devServer: {
		host: '0.0.0.0',
		port: 7777,
		https: false,
		compress: true,
		// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
		disableHostCheck: true,
	},
	configureWebpack: {
		rules: [],
		plugins: []
	},
	configureWebpack: config => {},
	chainWebpack: config => {}
}