<template>
  <section>
    <router-link :to="currboardLink">
      <div class="board-card flex align-center justify-center">
        <i class="fas fa-tasks"></i>
      </div>
      <div class="board-title align-center">{{board.name}}</div>
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

