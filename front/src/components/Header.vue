<template>
  <section>
    <div class="header flex space-between align-center">
      <router-link class="home-icon-container" to="/">
        <i class="fas fa-home"></i>
      </router-link>
      <div class="logo">
        <i class="fas fa-check-double"></i>MakeIt
      </div>
      <input type="text" placeholder="search" @input="setFilter" v-model="filterTxt" />
      {{filterTxt}}
      <div class="nav-links-container flex">
        <router-link class="flex" to="/">logout</router-link>
        <router-link class="flex" to="/login">login</router-link>
        <router-link class="flex" to="/singup">singup</router-link>
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
  methods:{
    setFilter(){
     console.log('ss')
    }
  }
};
</script>
