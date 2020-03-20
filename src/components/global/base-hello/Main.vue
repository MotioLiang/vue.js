<template>
  <div class="hello">
    <h1 class="red">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'baseHello',
  props: {
    msg: String
  }
}
</script>
<style lang="scss">
.red {
  color: red;
}
</style>
