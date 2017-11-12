<template>
  <div id="detail" class="container">
    <br>
    <router-link class="btn btn-light" to="/">返回</router-link>
    <br>
    <h1 class="text-muted">
       {{customer.name}}
       <span class="float-right">
          <router-link class="btn btn-secondary" v-bind:to="/redact/+customer.id">编辑</router-link>
          <button v-on:click="deleteCustomer(customer.id)" class="btn btn-secondary" to="/">删除</button v-on:click="">
       </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(value,key) in customer">
          <strong>{{key}}:</strong>{{value}}
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'datail',
  data(){
    return {
      customer:{}
    }
  },
  methods:{
    fetchCustomer(id){
      this.$http.get("http://localhost:3000/users/" + id)
          .then((res) => {
              this.customer = res.body;
          })
    },
    deleteCustomer(id){
       this.$http.delete("http://localhost:3000/users/" + id)
           .then((res) => {
              this.$router.push({path:"/",query:{alert:"删除成功"}});
           })
    }
  },
  created(){
    this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<style>

</style>
