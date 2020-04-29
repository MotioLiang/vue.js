import Vue from 'vue'
import {
    Dialog,
    Button,
    Message,
    MessageBox,
    Form,
    FormItem,
    Input,
    Checkbox
} from 'element-ui'


Vue.use(Dialog)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Checkbox)
Vue.use(Input)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
