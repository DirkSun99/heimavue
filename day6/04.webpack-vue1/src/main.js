// 如何在 webpack 构建的项目中使用 Vue 进行开发


// 复习
// 在普通网页中如何使用vue
// 1. 使用 script 标签导入 vue 的包
// 2. 在 index 页面中 创建一个 id 为 app div 容器
// 3. 通过 new Vue 得到一个 vm 实例

// 在 webpack 中尝试使用 Vue
// 在 webpack 中使用 import Vue from 'vue' 导入的 Vue 构造函数功能不完善，只提供了 runtime-only 的方式，并没有提供像网页中那样的使用方式
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

// 回顾包的查找规则
// 1. 找项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中根据包名找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找一个叫做 package.json 的包属性文件
// 4. 在 package.json 文件中，查找一个 main 属性 【main属性指定了这个包在被加载时候的入口文件】


// const login = {
//     template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }

// 1. 导入login组件
import login from './login.vue'

// 2. 默认 webpack 无法打包 .vue 文件，需要安装相关的 loader
// npm i vue-loader vue-template-compiler -D
// 在配置文件中新增 loader 配置项 {test: /\.vue$/, use: 'vue-loader'}

// 3. 启用VueLoaderPlugin插件
// 3.1 在配置文件中引入：const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 3.2 在plugins模块中添加启用 new VueLoaderPlugin()

const vm = new Vue({
    el: '#app',
    data: {
        msg: 123
    },
    // components: {
    //     login
    // }

    // 在 webpack 中，如果想要通过 vue 把一组件放到页面中去展示，vm实例中的 render 函数可以实现
    // render: function (createElements) {
    //     return createElements(login)
    // }

    // 简写
    render: c => c(login)

})

// 总结梳理：webpack 中部分如何使用 vue
// 1. 安装vue的包：npm i vue -S
// 2. 由于在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件，所以需要安装能解析这种文件的 loader，npm  i vue-loader vue-template-complier -D
// 3. 在 main.js 中导入 vue 模块 import Vue from 'vue'
// 4. 定义一个 .vue 结尾的组件，其中组件由三部分组成：template script style
// 5. 使用 import 导入这个组件 import login from './login.vue'
// 6. 创建 vm 的实例 const vm = new Vue({el: '#app', render: c => c(login)})
// 7. 在页面中创建一个 id 为 app 的 div 元素作为 vm 实例要控制的区域 

import m1, {title as title123, content} from './test'
console.log(m1)
console.log(`${title}---${content}`)