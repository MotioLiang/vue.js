<template>
    <div class="errPage-container">
        <el-button
            @click="back"
            icon="arrow-left"
            class="pan-back-btn"
        >
            返回
        </el-button>
        <el-row>
            <el-col :span="12">
                <h1 class="text-jumbo text-ginormous">
                    出错啦!
                </h1>
                <h2>你没有权限去该页面</h2>
                <h6>如有不满请联系你领导</h6>
            </el-col>
            <el-col :span="12">
                <img
                    :src="errGif"
                    width="313"
                    height="428"
                    alt="Girl has dropped her ice cream."
                >
            </el-col>
        </el-row>
    </div>
</template>

<script>
import errGif from '@/assets/images/error/401.gif'

export default {
    name: 'Page401',

    data() {
        return {
            errGif: errGif + '?' + +new Date()
        }
    },

    methods: {
        back() {
            if (this.$route.query.noGoBack) {
                this.$router.push({ path: '/' })
            } else {
                this.$router.go(-1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.errPage-container {
    width: 800px;
    margin: 100px auto;
    .pan-back-btn {
        background: #008489;
        color: #fff;
        border: none !important;
    }
    .pan-gif {
        margin: 0 auto;
        display: block;
    }
    .pan-img {
        display: block;
        margin: 0 auto;
        width: 100%;
    }
    .text-jumbo {
        font-size: 60px;
        font-weight: 700;
        color: #484848;
    }
}
</style>
