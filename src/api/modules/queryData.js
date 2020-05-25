import axios from '..'

//在这里定义了一个登陆的接口，把登陆的接口暴露出去给组件使用
export const queryData = () => axios.get('/posts/1/comments')
