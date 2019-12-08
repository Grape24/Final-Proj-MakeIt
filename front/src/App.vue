<template>
  <div id="app">
   <Header @loggedOut="loggedOut"></Header>
    <router-view />
  </div>
</template>


<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  },
  methods: {
    loggedOut() {
      this.$store.dispatch("loggedOut");
    }
  }
};
</script>

<style>
</style>
