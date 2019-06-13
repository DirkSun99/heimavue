<template>
    <div>
        <h1>这是 App 组件</h1>

        <!-- 为什么这里叫做 mt-button 的 button 就能直接使用？ -->
        <mt-button type="danger" icon="more" @click="show">default</mt-button>

        <mt-button type="danger" size="large" plain>default</mt-button>

        <mt-button type="danger" size="small" disabled>default</mt-button>

        <!-- <mybtn type="primary">12345</mybtn> -->

        <button type="button" class="mui-btn mui-btn-royal">紫色</button>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        <router-view></router-view>

    </div>
</template>

<script>

// 导入 Toast 组件
import { Toast } from 'mint-ui'

export default {
    data () {
        return {
            toastInstance: null
        }
    },
    methods: {
        getList () {
            // 在获取数据之前，立即弹出 Toast 提示用户正在加载数据
            this.show()

            // 模拟获取列表的方法
            setTimeout(() => {
                // 当 3 秒过后，数据获取回来了，要把 Toast 移除
                this.toastInstance.close()
            },3000)
        },

        show () {
            this.toastInstance = Toast({
                message: '提示信息',
                position: 'top',
                // 如果为 -1，弹窗不消失
                duration: -1,
                // 设置图标的类
                iconClass: 'glyphicon glyphicon-ok',
                // 自定义Toast的样式，需要提供一个类名
                className: 'mytoast'
            })
        }
    },
    created() {
        this.getList()
    },
}
</script>
