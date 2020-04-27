<template>
    <div id="app">
        <router-link to="/">
            <el-button>Home</el-button>
        </router-link>
        <router-link to="/about">
            <el-button>About</el-button>
        </router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    text-align: center;
}
</style>
