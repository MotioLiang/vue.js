<template>
  <div id="navbar">
    <nav class="navbar navbar-expand navbar-dark bg-danger p-4">
      <div class="container">
          <router-link class="navbar-brand" to="/">用户管理系统</router-link>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li>
              <router-link class="nav-link" to="/add">Add</router-link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  components: {

  }
}
</script>

<style>

</style>
