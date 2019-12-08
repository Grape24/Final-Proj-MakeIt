<template>
  <section>
    <div v-if="loading">
      <img src="spinner-icon-gif-10.png" alt="">
    </div>
    <div v-else class="home">
      <board-list :boards="boards" @addBoard="addBoard"></board-list>
    </div>
  </section>
</template>

<script>
import boardList from "../components/BoardList.vue";

export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    getBoards() {
      this.$store.store.dispatch({ type: "loadBoards" });
    },
    addBoard(board) {
      this.$store.store.dispatch({ type: "addBoard", board });
    }
  },
  computed: {
    boards() {
      return this.$store.store.getters.boards;
    }
  },
  created() {
    this.loading = true;
    this.getBoards();
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },

  components: {
    boardList
  }
};
</script>
