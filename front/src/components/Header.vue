<template>
  <div class="header flex space-between">
    <router-link class="logo" to="/">logo</router-link>
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
