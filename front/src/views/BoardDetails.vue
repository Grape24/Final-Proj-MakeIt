<template>
  <section v-if="topics">
    <topics-list :topics="topics" :currBoardId="currBoard._id"></topics-list>
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
  created() {
    const id = this.$route.params._id;
    this.$store.dispatch({ type: "getCurrBoard", id });
  }
};
</script>
