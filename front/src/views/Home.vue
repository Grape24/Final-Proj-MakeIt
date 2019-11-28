<template>
  <div class="home">
    <board-list :boards="boards"></board-list>
    
  </div>
</template>

<script>
import boardList from "../components/BoardList.vue";

export default {
  methods: {
    getBoards() {
      this.$store.dispatch({ type: "loadBoards" });
    }
  },
  computed: {
    boards() {
      return this.$store.getters.boards;
    }
  },
  created() {
    this.getBoards();
  },

  components: {
    boardList
  }
};
</script>
