<template lang="pug">
  .home
    img(:src="getImgUrl('logo.png')" alt="logo")
    base-hello(msg="Home")
    svg-icon(icon-class="1" @click="handleSvg")
</template>

<script>
import getImgUrl from '@/mixins/getImgUrl'

import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')

export default {
  name: 'home',

  mixins: [getImgUrl],

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
