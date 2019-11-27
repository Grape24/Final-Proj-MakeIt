<template>
  <section>
    <h1>Board list:</h1>
    <board-preview v-for="board in boards" :key="board._id" :board="board"></board-preview>
  </section>
</template>

<script>
import boardPreview from "./BoardPreview.vue";

export default {
  components: {
    boardPreview
  }
};
</script>
