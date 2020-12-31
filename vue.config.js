/* eslint-disable */
const path = require('path');
const glob = require('glob');

function handleEntry(pagePath) {
  let entry= {};
  glob.sync(path.resolve(pagePath, './**/*.html')).forEach(item => {
    item = path.resolve(item, './');
    const dir = path.dirname(item);
    const pageName = dir
      .replace(pagePath, '')
      .replace(/^\//, '')
      .replace(/^\\/, '')
      .replace(/\\/g, '/');
    entry[pageName] = {
      entry: path.resolve(dir, './main.ts'),
      template: item,
      filename: pageName + '/' + 'index.html',
      title: pageName
    };
  });
  return entry;
}

const pages = handleEntry(path.resolve(__dirname, './src/application'));

module.exports = {
  productionSourceMap: false,
  pages: pages,
  devServer: {
    open: true,
    // host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false
  }
};
