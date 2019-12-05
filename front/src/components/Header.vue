<template>
  <div class="header flex align-center">
    <router-link class="home-icon-container" to="/"><i class="fas fa-home"></i></router-link>
    <div class="logo"><i class="fas fa-check-double"></i>MakeIt</div>
    <div v-if="false" class="nav-links-container flex ">
      <router-link class="flex" to="/">logout</router-link>
      <router-link class="flex" to="/login">login</router-link>
      <router-link class="flex" to="/singup">singup</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
