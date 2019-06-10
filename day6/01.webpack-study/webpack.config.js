// 由于 webpack 是基于 Node 进行构建的，所以 webpack 的配置文件中，任何合法的 Node 代码都是支持的
const path= require('path')

// 在内存中根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中挂载一个 plugins 节点
const htmlWebpackPlugin = require('html-webpack-plugin')

// 当以命令的形式运行 webpack 或 webpack-dev-server 的时候，工具会发现并没有提供要打包的文件的入口和出口文件
// 此时会检查项目根目录中的配置文件并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象进行打包构建
module.exports = {
    // 入口文件
    entry: path.join(__dirname, './src/main.js'),
    // 指定输出选项
    output: {
        // 输出路径
        path: path.join(__dirname, './dist'),
        // 指定输出文件的名称
        filename: 'bundle.js'
    },
    mode: 'development',
    // 所有 webpack 插件的配置节点
    plugins: [
        new htmlWebpackPlugin({
            // 指定模板文件路径
            template: path.join(__dirname, './src/index.html'),
            // 设置生成的内存页面的名称
            filename: 'index.html'
        })
    ],
    // 配置所有第三方 loader 模块
    module: {
        // 第三方模块的匹配规则
        rules: [
            // 处理 css 文件的 loader
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            // 处理 less 文件的 loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            // 处理 scss 文件的 loader
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
}