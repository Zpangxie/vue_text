module.exports = {
  pages: {
    index: {
      //入口
      entry: '19_src_配置代理服务器/main.js',
    },
  },
	lintOnSave:false, //关闭语法检查
	//开启代理服务器（方式一）
	/* devServer: {
    proxy: 'http://localhost:5000'
  }, */
	//开启代理服务器（方式二）
	devServer: {
    proxy: {
      '/demo': {
        target: 'http://localhost:3000',
				pathRewrite:{'^/demo':''},
      },
      // '/api/**/***' -> 'http://localhost:3000/api/**/***' -> 'http://localhost:3000/**/***'
      '/api': {
        target: 'http://localhost:3000',
				pathRewrite:{'^/api':''},
      },
    }
  }
}