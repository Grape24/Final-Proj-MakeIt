<template>
  <section>
    <form @submit.prevent="doSignup">
      <input type="text" v-model="signupCred.email" placeholder="Email" />
      <br />
      <input type="text" v-model="signupCred.password" placeholder="Password" />
      <br />
      <input type="text" v-model="signupCred.username" placeholder="Username" />
      <br />
      <button>Signup</button>
    </form>
  </section>
</template>

<script>
// import { uploadImg } from "../services/CloudinaryService.js";

export default {
  data() {
    return {
      signupCred: {}
    };
  },
  methods: {
    async uploadImgfunc(ev) {
      var res = await uploadImg(ev);
      this.task.imgUrl = res.url;
    },
    doSignup() {
      const cred = this.signupCred;
      if (!cred.email || !cred.password || !cred.username)
        return (this.msg = "Please fill up the form");
      this.$store.dispatch({ type: "signup", userCred: cred });
      this.$router.push("/");
    }
  }
};
</script>