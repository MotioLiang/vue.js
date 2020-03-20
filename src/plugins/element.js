import Vue from 'vue'
import {
  Button,
  Message,
  MessageBox
} from 'element-ui'

Vue.use(Button)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
