<template>
  <section>
    <h1>Board list:</h1>
    <board-preview v-for="board in boards" :key="board._id" :board="board"></board-preview>
  </section>
</template>

<script>
import boardPreview from "./BoardPreview.vue";

export default {
  data() {
    return {
      boards: [{ name: "noonon", _id: 189 }, {name:'jfjj' , _id: 888}]
    };
  },
  components: {
    boardPreview
  }
};
</script>
