<template>
  <div class="category">
    <div class="search">
      <div class="ser">
        <span class="icon"></span>
        <span>商品搜索,共239款好物</span>
      </div>
    </div>
    <div class="content">
      <scroll-view
        class="left"
        scroll-y="true"
      >
        <div
          class="icon-text"
          v-for="(item, index) in listData"
          :key="item.id"
          :class="[index === nowIndex ? 'active' : '']"
          @click="getDetailData(item.id, index)"
        >
          {{item.name}}
        </div>
      </scroll-view>
      <scroll-view
        class="right"
        scroll-y="true"
      >
        <div class="banner">
          <img
            :src="detailData.banner_url"
            :lazy-load="true"
            alt="图片加载失败"
          >
        </div>
        <div class="title">
          <span>—</span>
          <span>{{ detailData.name }}分类</span>
          <span>—</span>
        </div>
        <div class="bottom">
          <div
            v-for="(item, index) in detailData.subList"
            :key="index"
            class="item"
          >
            <img
              :src="item.wap_banner_url"
              :lazy-load="true"
              alt="图片加载失败"
            >
            <span>{{ item.name }}</span>
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>
<script>
import { get } from '../../utils'
let activeId = '1005000'
export default {
  data () {
    return {
      nowIndex: 0,
      listData: [],
      detailData: {}
    }
  },
  mounted () {
    this.getListData()
    this.getDetailData(activeId, this.nowIndex)
  },
  methods: {
    async getListData () {
      const data = await get('/category/indexaction')
      this.listData = data.categoryList
    },
    async getDetailData (id, index) {
      this.nowIndex = index
      const data = await get('/category/currentaction', {
        id: id
      })
      this.detailData = data.data.currentOne
    }
  }
}
</script>
<style lang='scss' scoped>
@import "./style.scss";
</style>

