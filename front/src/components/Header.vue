<template>
  <div class="header flex space-between">
    <router-link to="/"><img src="../assets/logo.png" class="logo"/></router-link>
    <div class="nav-links-container flex ">
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
