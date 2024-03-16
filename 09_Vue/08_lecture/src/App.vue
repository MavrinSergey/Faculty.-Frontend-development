<template>
  <div id="app">
    <header>
      <router-link to="/dashboard">DashBoard</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/notfound">notfound</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
    }
  },
  methods: {},
  created() {
    this.$router.push({name: 'dashboard'})
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  margin-right: 15px;
}
</style>
