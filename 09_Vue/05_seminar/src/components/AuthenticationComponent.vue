<template>
  <div>
    <form v-if="!isAuthenticated" @submit="login" action="#">
      <h2>log in to enter the application</h2>
      <label>
        <input type="text" name="username" v-model="username" required>
      </label>
      <label>
        <input type="password" name="password" v-model="password" required>
      </label>
      <button type="submit">login in</button>
    </form>
    <div v-else class="authTrue">
      <h2>You have successfully logged in</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      username: '',
      password: '',
      isAuthenticated: false,
      users: [
        {username: 'sergey', password: 'admin'},
        {username: 'admin', password: 'admin'},
        {username: 'test', password: 'test'}
      ]
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      if (this.users.find(item => item.username === this.username && item.password === this.password)) {
        this.isAuthenticated = !this.isAuthenticated;
      }
      this.username = '';
      this.password = '';
    }
  }
}
</script>


<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

form, .authTrue {
  margin: 0 auto;
  padding: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid grey;
  border-radius: 10px;
}

input, button {
  width: 100%;
  height: 30px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 6px;
}
</style>
