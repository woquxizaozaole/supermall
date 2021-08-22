// module.exports = {
//   configureWebpack: {
//     resolve: {
//       // extensions: [],//配置后缀，配了之后引用文件路径不用写后缀
//       alias: {
//         'assets': 'src/assets',
//         'conmon': 'src/common',
//         'components': 'src/components',
//         'network': 'src/network',
//         'views': 'src/views',
//       }
//     }
//   }
// }

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
      .set('assets',  resolve('src/assets'))
      .set('api', resolve('src/api'))
  }
}