<template>
    <div class="hello">
        <h1 class="red">
            {{ msg }}
        </h1>
    </div>
</template>

<script>
export default {
    name: 'BaseHello',
    props: {
        msg: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss">
.red {
    color: red;
}
</style>
