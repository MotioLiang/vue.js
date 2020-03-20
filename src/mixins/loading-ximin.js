export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    /**
     * @description 展示加载框
     * @author motioliang
     * @date 2019-02-27
     */
    showLoading () {
      this.loading = true
    },
    /**
     * @description 隐藏加载框
     * @author motioliang
     * @date 2019-02-27
     */
    hiedLoading () {
      this.loading = false
    }
  }
}
