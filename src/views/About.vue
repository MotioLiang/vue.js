<template>
  <div>
    <tabs v-model="value">
      <tab-pane
        label="标签一"
        name="1"
        :closable="true"
      >标签一的内容</tab-pane>
      <tab-pane
        label="标签二"
        name="2"
      >标签二的内容</tab-pane>
      <tab-pane
        label="标签三"
        name="3"
        :closable="true"
      >标签三的内容</tab-pane>
      <tab-pane
        label="标签四"
        name="4"
        :closable="true"
      >标签四的内容</tab-pane>
    </tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '1'
    }
  }
}
</script>

<style>
.tabs {
  font-size: 14px;
  color: #657180;
}

.tabs-bar:after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #d7dde4;
  margin-top: -1px;
}

.tabs-tab {
  display: inline-block;
  padding: 4px 16px;
  margin-right: 6px;
  background: #fff;
  border: 1px solid #d7dde4;
  cursor: pointer;
  position: relative;
}

.tabs-tab-active {
  color: #336699;
  border-top: 1px solid #336699;
  border-bottom: 1px solid #fff;
  transform: translateY(-1px);
  transition: transform 0.5s;
}

.tabs-tab-active:before {
  content: "";
  display: block;
  height: 1px;
  background: #3399ff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.tabs-content {
  padding: 8px 0;
}

.close {
  color: #ff6666;
}

.close::before {
  content: "\2716";
}

.close:hover {
  color: #990033;
  font-weight: bolder;
}
</style>
