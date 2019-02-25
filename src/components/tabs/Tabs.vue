<template>
  <div class="tabls">
    <div class="tabs-bar">
      <div
        v-for="( item, index ) in navList"
        :key="index"
        :class="tabActive(item)"
        @click="handleChange(index)"
      >
        {{ item.label }}
        <span
          v-if="item.closable"
          class="close"
          @click.stop="close(index, item.name)"
        ></span>
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number]
    }
  },
  data () {
    return {
      currentValue: this.value,
      navList: [],
      conentList: []
    }
  },
  watch: {
    currentValue () {
      this.upDateContent()
    }
  },
  methods: {
    getChildrenPane () {
      return this.$children.filter(item => item.$options.name === 'pane')
    },
    upDateNav () {
      this.navList = []
      this.getChildrenPane().forEach((value, index) => {
        this.navList.push({
          label: value.label,
          name: value.name || index,
          closable: value.closable
        })
        if (index === 0) {
          if (!this.currentValue) {
            this.currentValue = index
          }
        }
        this.upDateContent()
      })
    },
    upDateContent () {
      let _this = this
      this.getChildrenPane().forEach((val, index) => {
        val.show = (_this.currentValue === val.name)
      })
    },
    tabActive (item) {
      return [
        'tabs-tab',
        {
          'tabs-tab-active': (item.name === this.currentValue)
        }
      ]
    },
    handleChange (index) {
      let nav = this.navList[index]
      this.currentValue = nav.name
      this.$emit('input', this.currentValue)
    },
    close (num, name) {
      this.navList.splice(num, 1)
      this.getChildrenPane().forEach((val, index) => {
        if (name === val.name) val.show = false
      })
    }
  }
}
</script>
