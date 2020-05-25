<template lang="pug">
  .home
    div(default-src="@/assets/images/logo.png")
    img(src="@/assets/images/logo.png" alt="logo")
    base-hello(msg="Home")
    svg-icon(class="svg-rigth" icon-class="1" @click="handleSvg")
    router-link(to="/about") about
</template>

<script>
import { queryData } from 'api/modules/queryData'
export default {
    async created() {
        let data = await queryData()
        console.log(data)
    },
    methods: {
        handleSvg() {
            console.log('点击svg')
        }
    }
}
</script>

<style lang="scss" scoped>
.svg-rigth {
    width: 20px;
    height: 20px;
}
</style>
