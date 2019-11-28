<template>
  <section>
    <board-preview v-for="board in boards" :key="board._id" :board="board"></board-preview>
  </section>
</template>

<script>
import boardPreview from "./BoardPreview.vue";

export default {
  props: {
    boards: Array
  },
  components: {
    boardPreview
  }
};
</script>
