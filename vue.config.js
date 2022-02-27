const path = require('path');
const glob = require('glob');
const dateFormat = require('dateformat');

function getEntryPage(pagePath) {
  const pages = {};
  glob.sync(path.resolve(pagePath, './**/*.html')).forEach(item => {
    item = path.resolve(item, './');
    const dir = path.dirname(item);
    const pageName = dir
      .replace(pagePath, '')
      .replace(/^\//, '')
      .replace(/^\\/, '')
      .replace(/\\/g, '/');
    pages[pageName] = {
      entry: path.resolve(dir, './main.ts'),
      template: item,
      filename: pageName + '/index.html'
    };
  });
  return pages;
}

const pages = getEntryPage(path.resolve(__dirname, './src/application'));

module.exports = {
  productionSourceMap: false,
  pages: pages,
  devServer: {
    open: false,
    // host: 'localhost',
    port: 8080
  },
  assetsDir: dateFormat('yyyymmddHHMMss')
};
