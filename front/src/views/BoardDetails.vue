<template>
  <section>
    <topics-list :topics="topics"></topics-list>
  </section>
</template>
 

<script>
import TopicsList from "../components/TopicsList.vue";

export default {
  components: {
    TopicsList
  },
  data() {
    return {};
  },
  computed: {
    topics() {
      const currBoard = this.$store.getters.currBoard;
      if (currBoard) {
        return currBoard.topicTasksMap;
      }
    }
  },
  created() {
    const id = this.$route.params._id;
    this.$store.dispatch({ type: "getCurrBoard", id });
  }
};
</script>
