<template lang="pug">
  .home
    div(default-src="@/assets/images/logo.png")
    img(src="@/assets/images/logo.png" alt="logo")
    base-hello(msg="Home")
    svg-icon(class="svg-rigth" icon-class="1" @click="handleSvg")
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')

export default {
    name: 'Home',

    computed: {
        ...mapState(['userName'])
    },

    mounted() {
        console.log(this.$store)
        console.log(this.userName)
    },

    methods: {
        handleSvg() {
            console.log('点击svg')
        }
    }
}
</script>

<style lang="scss" scoped>
// .home {
//   background: url(../assets/images/logo.png);
// }
.svg-rigth {
    width: 20px;
    height: 20px;
}
</style>
