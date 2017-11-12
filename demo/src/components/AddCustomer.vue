<template>
  <div id="add-customers" class="container">
      <br>
      <h1 class="text-muted">添加用户</h1>
      <br>
      <form v-on:submit="addCustomer">
        <div class="form-group">
          <label>姓名</label>
          <input v-model="customer.name" type="text" class="form-control" placeholder="Enter Name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input v-model="customer.phone" type="text" class="form-control" placeholder="Enter Phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input v-model="customer.email" type="email" class="form-control" placeholder="Enter Email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input v-model="customer.education" type="text" class="form-control" placeholder="Enter Deucation">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input v-model="customer.greduationschool" type="text" class="form-control" placeholder="Enter Greduationschool">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input v-model="customer.profession" type="text" class="form-control" placeholder="Enter Profession">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea v-model="customer.profile" class="form-control" rows="5" placeholder="Enter Profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">确定</button>
     </form>
     <br>
  </div>
</template>

<script>

export default {

  name: 'add-customers',
  data(){
    return {
      customer:{}
    }
  },
  methods:{
    addCustomer(e){
      e.preventDefault();
      if(!this.customer.name || !this.customer.email || !this.customer.phone){
         alert("请输入完整内容");
      }else{
         let newCustomer = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            profile:this.customer.profile,
            education:this.customer.education,
            greduationschool:this.customer.greduationschool,
            profession:this.customer.profession,
         }
         this.$http.post("http://localhost:3000/users",newCustomer)
                      .then((res) => {
                         this.$router.push({path:"/",query:{alert:"添加成功"}});
                      })
        }
     }

  }
}
</script>

<style>

</style>
