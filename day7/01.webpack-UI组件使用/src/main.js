import Vue from 'vue'

// 1. 导入 vue-router
import VueRouter from 'vue-router'

// 2. 手动安装 VueRouter
Vue.use(VueRouter)


// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
// 导入 MUI 样式表 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.min.css'

// 导入所有的 Mint-UI组件
// 导入 Mint-UI
/**
import MintUI from 'mint-ui' // 所所有的组件都导入进来
// 可以省略 node_modules 这一层目录
import 'mint-ui/lib/style.css'
// 将 MintUI 安装到 Vue中
Vue.use(MintUI) // 把所有的组件注册为全局组件
 */

// 按需导入 Mint-UI 组件
import { Button } from 'mint-ui'
// 使用 Vue.component 注册按钮组件
Vue.component(Button.name, Button)
// console.log(Button.name)

// 导入 App 组件
import app from './App.vue'

// 导入自定义路由模块
import router from './router'

const vm = new Vue({
    el: '#app',
    // render 会把 el 指定的容器中所有的内容都清空覆盖，所以不要把路由的 router-view 和 router-link 直接写到 el 所控制的元素中
    render: c => c(app),
    // 4. 将路由对象挂载到 vm 上
    router
})

// 注意： App 这个组件是通过 VM 实现的 render 函数渲染出来的，render 函数如果要渲染组件，只能放到 el:'#app' 所指定的元素中
// Account 和 Goodslist组件，是通过路由匹配监听到的，所以这两个组件只能展示到属于路由的 <router-view></router-view>中去