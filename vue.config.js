var path = require('path');


module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',

    configureWebpack: {
        resolve: {
            alias: {
                "@api": path.resolve(__dirname, 'src/api')
            }
        }
    }        
  }