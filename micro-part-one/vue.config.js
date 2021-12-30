module.exports = {
  publicPath: "//localhost:8081", // 静态资源指回原有自己的服务器，而不是被主框架读过去后用了主框架的静态资源
  devServer: {
    port: "8081",
    headers: {
      "Access-Control-Allow-Origin": "*", // 允许主框架读取资源
    },
  },
  configureWebpack: {
    // 打包文件出口
    output: {
      libraryTarget: "umd", //打包成umd格式（相比于cmd,amd规范，umd能兼容他俩，所以做通用模块,而且主框架通过featch（promise）方式获取子应用可以直接解析umd模块）
      library: "part-one", // 资源命名
    },
  },
};
