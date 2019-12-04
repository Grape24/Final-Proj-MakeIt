<template>
  <div>
    <div>
      
    </div>
    <div>
    <form  @submit.prevent="doLogin">
      <input type="text" v-model="loginCred.email" placeholder="Email">
      <br />
      <input type="text" v-model="loginCred.password" placeholder="Password">
      <br />
      <button>Login</button>
    </form>

    <form @submit.prevent="doSignup">
      <input type="text" v-model="signupCred.email" placeholder="Email">
      <br />
      <input type="text" v-model="signupCred.password" placeholder="Password">
      <br />
      <input type="text" v-model="signupCred.username" placeholder="Username">
      <br />
      <button>Signup</button>
    </form>
    </div>
    <hr/>
   
    

  </div>
</template>

<script>
export default {
  
  data() {
    return {
      loginCred: {},
      signupCred: {},
      msg: '',
    }
  },
  
  
  methods: {
    async doLogin() {
      const cred = this.loginCred
      if(!cred.email || !cred.password) return this.msg = 'Please enter user/password'
      await this.$store.dispatch({type :'login', userCred:cred})
      this.loginCred = {};
      
    },
    doLogout() {
      this.$store.dispatch({type: 'logout'})
    },
    doSignup() {
      const cred = this.signupCred
      if(!cred.email || !cred.password ||!cred.username) return this.msg = 'Please fill up the form'
      this.$store.dispatch({type: 'signup', userCred: cred})
    },
   
  }
  
}
</script>