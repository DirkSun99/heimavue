<template>
    <div>
        <h1>这是 App 组件</h1>

        <!-- 为什么这里叫做 mt-button 的 button 就能直接使用？ -->
        <mt-button type="danger" icon="more">default</mt-button>

        <mt-button type="danger" size="large" plain>default</mt-button>

        <mt-button type="danger" size="small" disabled>default</mt-button>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        <router-view></router-view>
    </div>
</template>
