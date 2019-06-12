<template>
    <div>
        <h2>这是 Account 组件</h2>

        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
</template>

<style scoped lang="scss">
// 普通的 style 标签只支持普通的样式，如果想要启用 scss 或 less 需要为 style 元素设置 lang 属性
// 只要 style 标签是在 .vue 组件中定义的，推荐都为 style 开启 scoped 属性 
body {
    div {
        font-style: italic;
    }
}
</style>
