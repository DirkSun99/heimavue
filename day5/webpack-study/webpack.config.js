const path = require('path')
// 启用热更新的第2步
const webpack = require('webpack')
// 导入在内存中生成 HTML 页面的插件
// 只要是插件。都一定要放到 plugins 节点中去
// 这个插件的两个作用：
// 1. 自动在内存中根据指定的页面生成一个内存的页面
// 2. 自动把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件其实就是一个JS文件，通过 Node 中的模块操作，向外暴露了一个配置对象
module.exports = {
    // 入口，表示webpack打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    // 输出文件相关的配置
    output: {
        // 指定打包好的文件输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        // 指定输出的文件的名称
        filename: 'bundle.js'
    },
    // 指定模式为开发模式
    mode: 'development',
    // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
    devServer: {   
        // 自动打开浏览器
        open: true,
        // 设置启动时候的运行端口
        port: 3002,
        // 指定托管的根目录
        contentBase: 'src',
        // 启用热更新 第1步
        hot: true
    },
    // 配置插件的节点
    plugins: [
        // new 一个热更新的模块对象，这是启用热更新的第3步
        new webpack.HotModuleReplacementPlugin(),
        // 创建一个在内存中生成 HTML 页面的插件
        new htmlWebpackPlugin({
            // 指定模板页面，将来会根据指定的页面路径去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的页面的名称
            filename: 'index.html'
        })
    ],
    // 这个节点用于配置所有的第三方模块加载器
    module: {
        // 所有第三方模块的匹配规则
        rules: [
            // 配置处理 .css 文件的第三方 loader 规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, 
            // 配置处理 .less 文件的第三方 loader 规则
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            // 配置处理 .scss 文件的第三方 loader 规则
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
}

// 当在控制台直接输入 webpack 命令执行的时候，webpack做了以下几步：
// 1. 首先，webpack发现并没有通过命令的形式指定入口和出口
// 2. webpack会去项目的根目录中，查找一个叫做'webpack.config.js'的配置文件
// 3. 当找到配置文件后，webpack会去解析执行这个配置文件，当解析执行完配置文件后，就得到了配置文件中导出的配置对象
// 4. 当 webpack 拿到配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建