var webpack = require('webpack');
var path = require('path');  // обьявляем метод path из nodeJS
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');  // записывает линки на все стили в index.html
//
var SRC_DIR = path.resolve(__dirname, 'src');
  var DIST_DIR = path.resolve(__dirname, 'dist');   // path метод nodeJS для поиска пути к папке
//
var isProduction = (process.env.NODE_ENV === 'production');
//
module.exports = {  // общий обьект настроек
  entry: './src/index.js',   // точка входа, файл за которым мы смотрим
  output: {  // точка выхода, куда будет сложен результат работы
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,  // искать все файлы с расширением .js
        include: SRC_DIR,  // папка для поиска файлов для работы
        use: [   // список loaders которые будут обробатывать наши файлы
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {modules: false}]]
            }
          }
        ]
      },
//      // css
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],  // !!!!!! все лоадеры читаються справа - на лево
          fallback: 'style-loader'  // если ExtractTextPlugin не сработает, этот плагин добавит все стили в head инлайн
        })
      },
//       // images
      {
        test: /\.(jpg|png)$/i,
        include: SRC_DIR,
        use: [
          {
            loader: 'url-loader',  // если размер картинки меньше лимита, вставляем картинку бинарным кодом(0101) инлайново в файл
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              limit: 10000
            }
          },
          {
            loader: 'img-loader'  // чтобы webpack понимал картинки
          }
        ]
      },
//       // html
      {
        test: /\.html$/,
        use: 'html-loader'
      },
    ]
  },
  plugins: [
  new HTMLWebpackPlugin({   // описание настроек файла index.html
    title: 'Webpack is awesome',
    filename: 'index.html',
    template: 'src/index.html',
    favicon: 'src/favicon.png',
    inject: true
  }),
  new CleanWebpackPlugin(['dist']),
  new ExtractTextPlugin({
    filename: 'styles.css'
  }),
  new webpack.LoaderOptionsPlugin({
      minimize: isProduction,
    })
  ],
  devServer: {
    port: 9000,
    stats: 'errors-only',  // выводит только ошибки в консоль
    clientLogLevel: 'warning',
    compress: true
  }
};

if (isProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}
