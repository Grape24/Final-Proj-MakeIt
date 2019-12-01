<template>
  <section>
    <h2 class="board-name" v-if="currBoard">{{currBoard.name}}</h2>
    <div v-if="topics">
      <topics-list :topics="topics" :currBoardId="currBoard._id"></topics-list>
    </div>
  </section>
</template>
 

<script>
import TopicsList from "../components/TopicsList.vue";

export default {
  components: {
    TopicsList
  },
  data() {
    return {
      currBoard: null
    };
  },
  computed: {
    topics() {
    this.currBoard = this.$store.getters.currBoard;
      if (this.currBoard) {
        return this.currBoard.topicTasksMap;
      }
    }
  },
  methods:{
    updateBoard(map){
      this.currBoard = this.$store.getters.currBoard;
      let board = this.currBoard;
      board.topicTasksMap = map
      this.$store.dispatch({type: 'setBoard', board})

    }
  },
  created() {

    const id = this.$route.params._id;
    this.currBoard = this.$store.getters.currBoard;
    this.$store.dispatch({ type: "getCurrBoard", id });
  },
};
</script>
