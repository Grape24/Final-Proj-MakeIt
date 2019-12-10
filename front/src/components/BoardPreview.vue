<template>
  <section>
    <router-link class="flex column align-center" :to="currboardLink">
      <div class="board-title">{{board.name}}</div>
      <div class="board-card flex align-center justify-center">
      </div>
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
      return "/board/" + this.board._id;
    }
  }
};
</script>

