import Vue from 'vue'

// 1. 导入 vue-router
import VueRouter from 'vue-router'

// 2. 手动安装 VueRouter
Vue.use(VueRouter)

// 导入 App 组件
import app from './App.vue'
// 导入 Account 组件
import account from './main/Account.vue'
// 导入 Goodslist 组件
import goodslist from './main/Goodslist.vue'

// 3. 创建路由对象
const router = new VueRouter({
    routes: [
        {path: '/account', component: account},
        {path: '/goodslist', component: goodslist}
    ]
})

const vm = new Vue({
    el: '#app',
    // render 会把 el 指定的容器中所有的内容都清空覆盖，所以不要把路由的 router-view 和 router-link 直接写到 el 所控制的元素中
    render: c => c(app),
    // 4. 将路由对象挂载到 vm 上
    router
})

// 注意： App 这个组件是通过 VM 实现的 render 函数渲染出来的，render 函数如果要渲染组件，只能放到 el:'#app' 所指定的元素中
// Account 和 Goodslist组件，是通过路由匹配监听到的，所以这两个组件只能展示到属于路由的 <router-view></router-view>中去