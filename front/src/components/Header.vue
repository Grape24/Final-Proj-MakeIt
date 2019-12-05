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
        <div class="flex" v-if="loggedinUser" @click="logout">logout</div>
        <h2 class="flex" v-if="loggedinUser">user name:{{loggedinUser.username}}</h2>
        <router-link class="flex" to="/login" v-else>login</router-link>
        <router-link class="flex" to="/signup" v-if="!loggedinUser">singup</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Header",
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
