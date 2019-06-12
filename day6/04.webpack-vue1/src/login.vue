<template>
    <div>使用 vue 组件定义出来的 --- {{msg}}</div>
</template>

<script>
export default {
    // 注意：组件中的 data 必须是 function
    data () {
        return {
            msg: '123'
        }
    },
    methods: {
        show () {
            console.log('调用了 login.vue 中的 show 方法')
        }
    } 
}
</script>

<style>

</style>
