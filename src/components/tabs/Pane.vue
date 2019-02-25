<template>
  <div
    class="pan"
    v-if="show"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pane',
  props: {
    label: {
      type: String,
      default: ' '
    },
    name: {
      type: String
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: true
    }
  },
  watch: {
    lable () {
      this.upDateNav()
    }
  },
  mounted () {
    this.upDateNav()
  },
  methods: {
    upDateNav () {
      this.$parent.upDateNav()
    }
  }
}
</script>
