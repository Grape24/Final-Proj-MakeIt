<template>
  <div class="home">
    <board-list></board-list>
  </div>
</template>

<script>
// @ is an alias to /src
import boardList from "../components/BoardList.vue";

export default {
  components: {
    boardList
  }
};
</script>
