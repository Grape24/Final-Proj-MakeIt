<template>
  <div class="home">
    <Proj-list></Proj-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjList from "../components/ProjList.vue";

export default {
  components: {
    ProjList
  }
};
</script>
