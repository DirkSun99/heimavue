// 项目的JS入口文件

// 1.导入Jquery
// import *** from **** 是ES6中导入模块的方式
// 由于 ES6 的代码太高级了，浏览器解析不了，这一行执行会报错
import $ from 'jquery'

// 使用 import 语法 导入样式表
import './css/index.css'

// 注意：webpack 默认只能打包处理 js 类型的文件，无法处理其它的非 JS 类型的文件
// 如果要处理非js类型的文件，需要手动安装一些合适的第三方 loader 加载器
// 1. 如果想要打包处理 css 文件，需要安装 npm i style-loader css-loader -D
// 2. 打开webpack.config.js这个配置文件，在里面新增一个配置节点，叫做 module，它是一个对象，在这个 module 对象身上，有个rules属性，这个 rules属性是个数组，此数组中存放了所有第三方文件的匹配和处理规则

// 注意：webpack 处理第三方文件类型的过程
// 1. 发现这个要处理的文件不是JS文件，然后就去配置文件中查找有没有对应的第三方 loader 规则
// 2. 如果能找到对应的规则，就会调用对应的loader 处理这种文件类型
// 3. 在调用 loader 的时候是从后往前调用的
// 4. 当最后一个 loader 调用完毕会把处理结果直接交给 webpack 进行打包合并，最终输出到 bundle.js 中去
$(function() {
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor',function() {
        return '#D97634'
    })
})

// 经过刚才的演示，webpack可以做什么事情？
// 1. webpack 能够处理 JS 文件的互相依赖关系
// 2. webpack 能够处理 JS 的兼容问题，把高级的、浏览器不识别的语法转为低级的、浏览器能正常识别的语法

// webpack4命令格式 : webpack 要打包的文件的路径 -o 打包好的输出文件的路径 --mode development/production 
// 示例：webpack ./src/main.js -o ./dist/bundle.js --mode development

// 使用 webpack-dev-server 这个工具来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2. 安装完毕后，这个工具的用法和 webpack 命令的用法完全一样
// 3. 由于是在项目中安装的 webpack-dev-server，所以无法把它当作脚本命令，在终端直接运行（只有那些安装到全局 -g 的工具才能在终端执行）
// 4. 注意：webpack-dev-server 这个工具，如果想要正常运行，要求在本地项目中必须安装 webpack、webpack-cli
// 5. webpack-dev-server 打包生成的bundle.js文件并没有存放到实际的物理磁盘上；而是直接托管到了电脑的内存中，所以，在项目的根目录中找不到这个打包好的 bundle.js
// 6. 可以认为，webpack-dev-server 把打包好的文件以一种虚拟的形式托管到了项目的根目录中，虽然看不到它，但是可以认为和 dist src node_modules 平级，有一个看不见的文件叫做 bundle.js
