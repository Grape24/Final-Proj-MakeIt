<template>
  <section>
    <div class="account-form">
      <form class="flex column align-center" @submit.prevent="doLogin">
        <h2>Log in to MakeIt</h2>
        <input class="email-cred" type="text" v-model="loginCred.email" placeholder="Enter email" required />
        <input class="pass-cred" type="password" v-model="loginCred.password" placeholder="Enter password" required />
        <button class="login-btn" type="submit">
          Log In
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