<template>
  <div id="customer" class="container">
    <Alert v-bind:message="alert"></Alert>
    <br>
    <h1 class="text-muted">用户管理系统</h1>
    <br>
    <input v-model="filterInput" type="text" class="form-control" placeholder="根据姓名搜索内容">
    <br>
    <table class="table table-striped">
       <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
          </tr>
       </thead>
       <tbody>
         <tr v-for="customer in filterCustomers(customers,filterInput)">
           <td>{{customer.name}}</td>
           <td>{{customer.phone}}</td>
           <td>{{customer.email}}</td>
           <router-link class="btn btn-secondary mt-1 py-2" v-bind:to="/detail/+customer.id">详情</router-link>
         </tr>
       </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'customer',
  components:{
    Alert
  },
  data(){
    return {
      customers:[],
      alert:"",
      filterInput:""
    }
  },
  methods:{
    fetchCustomers(){
       this.$http.get("http://localhost:3000/users")
           .then((res) => {
              this.customers = res.body
           })
    },
    filterCustomers(customers,filterInput){
       return customers.filter((item) => {
          return item.name.match(filterInput)
       })
    }
  },
  created(){
     this.fetchCustomers();
     if(this.$route.query.alert){
       this.alert = this.$route.query.alert
     }
  }
}
</script>

<style>

</style>
