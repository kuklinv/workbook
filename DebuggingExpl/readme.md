Пример отладки из [LogRocket блога об отладке веб-приложений](https://blog.logrocket.com/master-javascript-debugging-web-apps/)

дополнительные материалы по webpack: 
[webpack](https://habr.com/ru/articles/524260/)

Создаем директорию проекта и инициализируем его:
```
mkdir DebuggingExpl
cd DebuggingExpl
npm init -y
```
package.json
```
  "devDependencies": {
    "webpack": "^5.96.1",
    "webpack-cli": "^5.1.4"
  }
```
webpack.config.js
```
 const path = require('path');
    module.exports = {
        mode: 'production', // Enables optimizations like minification and tree-shaking
        entry: './src/index.js', // Specifies the entry point of your application
        output: {
            path: path.resolve(__dirname, 'dist'),// Defines the output directory for bundled files
            filename: 'bundle.js',// Specifies the name of the bundled file
        },
    };
```
Now run npx webpack to bundle and minify your code.
```
npx webpack
```
