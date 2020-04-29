<template>
    <div class="about">
        <div><strong>{{ text }}</strong></div>
        <div>
            <el-button @click="logoutSubmit">
                退出
            </el-button>
        </div>
        <h1 @click="dialogVisible = true">
            {{ new Date() | parseTime }}
        </h1>
        <el-dialog
            title="提示"
            :close-on-click-modal="false"
            :visible.sync="dialogVisible"
            width="30%"
        >
            <span>这是一段信息</span>
            <span
                slot="footer"
                class="dialog-footer"
            >
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button
                    type="primary"
                    @click="dialogVisible = false"
                >确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')
export default {
    data() {
        return {
            text: 'About',
            dialogVisible: false
        }
    },
    methods: {
        ...mapActions(['logout']),

        async logoutSubmit() {
            await this.logout()
            this.$router.replace({ path: '/login' })
        }
    }
}
</script>

