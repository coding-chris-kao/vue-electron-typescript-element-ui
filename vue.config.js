const path = require('path')

module.exports = {
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./src/renderer/main.ts')
      .end()
    config.resolve.alias.set('@', path.join(__dirname, './src/renderer'))
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main/background.ts',
    },
  },
}
