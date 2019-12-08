<template>
  <section>
    <div class="header flex space-between align-center">
      <router-link class="home-icon-container" to="/">
        <i class="fas fa-home"></i>
      </router-link>
      <div class="logo">
        <i class="fas fa-check-double"></i>MakeIt
      </div>
      <div class="nav-links-container flex">
        <avatar class="nav-avatar"
                v-if="loggedinUser"
                :username="loggedinUser.userName"
                :src="loggedinUser.imgUrl"
                :size="50">
        </avatar>
        <div class="flex align-center username-nav" v-if="loggedinUser">Hi, {{loggedinUser.username}}!</div>
        <div class="flex align-center logout-nav" v-if="loggedinUser" @click="logout">Logout</div>
        
        <router-link class="flex" to="/login" v-else>Login</router-link>
        <router-link class="flex" to="/signup" v-if="!loggedinUser">Singup</router-link>
      </div>
    </div>
  </section>
</template>
<script>
import Avatar from 'vue-avatar';
export default {
  name: "Header",
  components:{
    Avatar
  },
  data() {
    return {
      filterTxt: ""
    };
  },
  methods: {
    logout() {
      this.$emit("loggedOut");
    }
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
  }
}
</script>
