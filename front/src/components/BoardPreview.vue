<template>
  <section>
    <router-link :to="currBoardId">
      <h1>Board preview</h1>
      <pre>name:{{board.name}}</pre>
    </router-link>
  </section>
</template>


<script>
export default {
  props: {
    board: Object
  },
  data() {
    return {
      id: this.$route.params._id
    };
  },
  computed: {
    currBoardId() {
      return `/board/${this.id}`;
    }
  }
};
</script>