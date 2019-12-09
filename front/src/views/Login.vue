<template>
  <section>
    <div class="account-form">
      <form @submit.prevent="doLogin">
        <h2>Login</h2>
        <br />
        <input type="text" v-model="loginCred.email" placeholder="Email" required />
        <br />
        <input type="password" v-model="loginCred.password" placeholder="Password" required />
        <span>
          <i class="fa fa-lock"></i>
        </span>
        <br />
        <button type="submit">
          <i class="fa fa-long-arrow-right"></i>
        </button>
      </form>
    </div>
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
      await this.$store.store.dispatch({ type: "login", userCred: cred });
      this.loginCred = {};
      this.$router.push("/");
    }
  }
};
</script>