<template>
    <el-form
        :model="loginFrom"
        :rules="loginFormRules"
        ref="loginFrom"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
    >
        <h3 class="title">
            系统登录
        </h3>
        <el-form-item prop="account">
            <el-input
                type="text"
                v-model="loginFrom.account"
                auto-complete="off"
                placeholder="账号"
            />
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input
                type="password"
                v-model="loginFrom.checkPass"
                auto-complete="off"
                placeholder="密码"
            />
        </el-form-item>
        <el-checkbox
            v-model="checked"
            checked
            class="remember"
        >
            记住密码
        </el-checkbox>
        <el-form-item style="width:100%;">
            <el-button
                type="primary"
                style="width:100%;"
                @click.native.prevent="loginSubmit"
                :loading="logining"
            >
                登录
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')

export default {
    data() {
        return {
            logining: false,
            loginFrom: {
                account: 'admin',
                checkPass: '123456'
            },
            loginFormRules: {
                account: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },
            checked: true
        }
    },
    methods: {
        ...mapActions(['login']),

        async loginSubmit() {
            await this.login([this.loginFrom.account])
            this.$router.replace({ path: '/' })
        }
    }
}
</script>

<style lang="scss" scoped>
.login-container {
    border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .remember {
        margin: 0px 0px 35px 0px;
    }
}
</style>