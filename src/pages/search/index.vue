<template>
  <div class="search">
    <div class="header">
      <div>
        <img
          src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"
          alt="图片加载失败"
        >
        <input
          type="text"
          :focus="true"
          v-model="searchVal"
          @input="getTipSearch"
          placeholder="商品搜索"
        >
        <img
          class="del"
          src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png"
          alt="图片加载失败"
          @click="clearSearch"
        >
      </div>
      <div>取消</div>
    </div>
    <div
      class="search-tips"
      v-if="searchVal"
    >
      <div v-if="tipsData.length !== 0">
        <div
          v-for="(item,index) in tipsData"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
      <div
        v-else
        class="nogoods"
      >
        数据库暂无此类商品
      </div>
    </div>
    <div
      class="history"
      v-if="historyData.length !== 0"
    >
      <div class="title">
        <div>历史记录</div>
        <div @click="clearHistory"></div>
      </div>
      <div class="content">
        <div
          v-for="(item,index) in historyData"
          :key="index"
        >
          {{ item.keyword }}
        </div>
      </div>

    </div>
    <div
      class="history"
      v-if="hotData.length !== 0"
    >
      <div class="title">
        <div>热门搜索</div>
      </div>
      <div class="content">
        <div
          v-for="(item,index) in hotData"
          :key="index"
          :class="{active: index === 0}"
        >
          {{ item.keyword }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get, post } from '../../utils'
let openid = 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c'
export default {
  data () {
    return {
      searchVal: '',
      tipsData: [],
      historyData: [],
      hotData: []
    }
  },
  mounted () {
    this.getHistoryData()
  },
  methods: {
    clearSearch () {
      this.searchVal = ''
      this.tipsData = []
    },
    async clearHistory () {
      const data = await post('/search/clearhistoryAction', {
        openId: openid
      })
      if (data) this.historyData = []
    },
    async getTipSearch () {
      const data = await get('/search/helperaction', {
        keyword: this.searchVal
      })
      this.tipsData = data.keywords
      console.log(data)
    },
    async getHistoryData () {
      const data = await get('/search/indexaction', {
        openId: openid
      })
      this.historyData = data.historyData
      this.hotData = data.hotKeywordList
      console.log(data)
    }
  }
}
</script>

<style scoped lang='scss'>
@import "./style.scss";
</style>
