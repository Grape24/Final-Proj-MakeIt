<template>
  <section>
    <form @submit.prevent="doLogin">
      <input type="text" v-model="loginCred.email" placeholder="Email" />
      <br />
      <input type="password" v-model="loginCred.password" placeholder="Password" />
      <br />
      <button>Login</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loginCred: {},
      msg: ""
    };
  },

  methods: {
    async doLogin() {
      const cred = this.loginCred;
      if (!cred.email || !cred.password) {
        return (this.msg = "Please enter user/password");
      }
      await this.$store.dispatch({ type: "login", userCred: cred });
      this.loginCred = {};
      this.$router.push("/");
    }
  }
};
</script>