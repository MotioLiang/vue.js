<template lang="pug">
  .about
    h1.h1(:class='text' attrs='text' size='smaill') {{ text }}
    p {{ new Date() | parseTime }}
    el-button(@click="handleClick") 测试
</template>

<script>
export default {
    data() {
        return {
            text: 'About'
        }
    },
    methods: {
        handleClick() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
        }
    }
}
</script>
