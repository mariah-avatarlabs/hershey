var path = require('path');


module.exports = {
    devServer: {
      proxy: {
        '/api/*': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          pathRewrite: {'^/api' : ''}

        },
      },
     }

    // publicPath: process.env.NODE_ENV === 'production'
    //     ? './'
    //     : '/',

    // configureWebpack: {
    //     devServer: {
    //         proxy: {
    //             "/api": {
    //                 target: "http://avatarclient.net/",
    //                 secure: false,
    //             }
    //         }
        
    //     },
        
    //     resolve: {
    //         alias: {
    //             "@api": path.resolve(__dirname, 'src/api')
    //         }
    //     }
    // }        
  }