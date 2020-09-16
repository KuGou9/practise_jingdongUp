const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: true,
    port: 80,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      // 需要重启 IDE
      .set('commonjs', resolve('src/commonjs'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/components/common'))
      .set('content', resolve('src/components/content'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'));
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
};
