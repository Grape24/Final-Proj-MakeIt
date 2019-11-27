<template>
  <section>
    <h1>Board list:</h1>
    <board-preview></board-preview>
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
