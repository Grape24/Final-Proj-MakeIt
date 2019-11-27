<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
    <router-view />
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
