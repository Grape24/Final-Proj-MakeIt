<template>
  <section>
    <router-link :to="currboardLink">
      <h1>{{board}}</h1>
    </router-link>
  </section>
</template>


<script>
export default {
  props: {
    board: Object
  },
  computed: {
    currboardLink() {
      return `/board/${this.board.id}`;
    }
  }
};
</script>

