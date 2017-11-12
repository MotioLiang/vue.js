<template>
  <div id="app" class="container">
     <br>
     <h1 class="text-muted">编辑用户</h1>
     <br>
     <form v-on:submit="addCustomer">
       <div class="form-group">
         <label>姓名</label>
         <input v-model="redact.name" type="text" class="form-control">
       </div>
       <div class="form-group">
         <label>电话</label>
         <input v-model="redact.phone" type="text" class="form-control">
       </div>
       <div class="form-group">
         <label>邮箱</label>
         <input v-model="redact.email" type="email" class="form-control">
       </div>
       <div class="form-group">
         <label>学历</label>
         <input v-model="redact.education" type="text" class="form-control">
       </div>
       <div class="form-group">
         <label>毕业学校</label>
         <input v-model="redact.graduationschool" type="text" class="form-control">
       </div>
       <div class="form-group">
         <label>职业</label>
         <input v-model="redact.profession" type="text" class="form-control">
       </div>
       <div class="form-group">
         <label>个人简介</label>
         <textarea v-model="redact.profile" class="form-control" rows="5"></textarea>
       </div>
       <button type="submit" class="btn btn-primary btn-block">确定</button>
       <br>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      redact:{}
    }
  },
  methods:{
     redactCustomer(id){
        this.$http.get("http://localhost:3000/users/" + id)
            .then((res) => {
               this.redact = res.body
            })
     },
     addCustomer(e){
       e.preventDefault();
          let customer = {
             name:this.redact.name,
             phone:this.redact.phone,
             email:this.redact.email,
             profile:this.redact.profile,
             education:this.redact.education,
             greduationschool:this.redact.graduationschool,
             profession:this.redact.profession,
          }
          this.$http.put("http://localhost:3000/users/" + this.$route.params.id,customer)
                       .then((res) => {
                          this.$router.push({path:"/",query:{alert:"更新成功"}});
                       })
      }
  },
  created(){
    this.redactCustomer(this.$route.params.id);
  }
}
</script>

<style>

</style>
