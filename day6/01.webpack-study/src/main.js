// 项目的 JS 入口文件
console.log('ok')

import './css/index.css'
import './css/index.scss'

// 注意：如果要通过路径的形式去引入 node_modules 中相关的文件，可以省略路径前面的 node_modules 这一层目录，直接写包的名称后面跟上具体的文件路径
// 不写 node_modules 这一层目录默认就会去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'

// class 关键字 是 ES6 中提供的新语法 ，是用来实现 ES6 中面向对象的编程方式
class Person {
    // 使用 static 关键字可以定义静态属性
    // 所谓的静态属性就是可以直接通过类名直接访问的属性
    // 实例属性：只能通过类的实例来访问的属性
    static info = {name: 'zs', age: 20}
}

// Java C# 实现面向对象的方式完全一样，class 是从后端语言中借鉴过来的，来实现面向对象
const p1 = new Person()

// 访问 Person 类身上的 info 静态属性
console.log(Person.info)

// 在 webpack 中默认只能处理一部分 ES6 的新语法 ，一些更高级的 ES6 语法或者 ES7 语法 webpack 是处理不了的，这时候就需要借助于第三方的 loader 来帮助 webpack 处理这些高级的语法，当第三方 loader 把高级语法转为低级语法之后会把结果交给 webpack 去打包到 bundle.js 中

// 通过 Babel 可以将高级的语法 转换为低级的语法

// 1. 在 webpack 中，可以运行如下两行命令安装两套包，去安装 Babel 相关的 loader 功能
// 1.1 第一套包：npm i babel-core babel-loader@7 babel-plugin-transform-runtime -D
// 1.2 第二套包：npm i babel-preset-env babel-preset-stage-0 -D
// 2. 打开 webpack 配置文件，在 module 节点下的 rules 数组中添加一个新的匹配规则
// 2.1 {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
// 2.2 注意：在配置 babel 的 loader规则的时候，必须把 node_module 目录通过 exclude 选项排除掉，原因有俩：
// 2.2.1 如果不排除 node_modules，则 babel 会把 node_modules 中所有的第三方 js 文件都打包编译，会非常消耗 CPU，同时打包速度非常慢
// 2.2.2 哪怕最终 Babel 把所有 node_modules 中的 JS 转换完毕了，但是项目也无法正常运行！
// 3. 在项目的根目录中，新建一个 .babelrc 的 Babel 配置文件，这个配置文件属于JSON格式，所以在写 .babelrc 配置的时候，必须符合 JSON 的语法规范：不能写注释，字符串必须用双引号
// 3.1 在 .babelrc 写如下的配置：
        /**
        {
            "presets": ["env","stage-0"],
            "plugins": ["transform-runtime"]
        }
        */
// 4. 了解：安装的 babel-preset-dev 是比较新的 ES 语法，之前安装的是 babel-preset-es2015，现在出了一个更新的语法插件叫做 babel-preset-env,它包含了所有的和 es*** 相关的语法