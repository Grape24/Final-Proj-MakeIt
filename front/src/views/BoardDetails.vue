<template>
  <section class="board-container">
    <h2 class="board-name" v-if="currBoard">{{currBoard.name}}</h2>
    <div v-if="topics">
      <topics-list
        :topics="topics"
        :topicsAsArr="topicsAsArr"
        @updateList="updateList"
        @addTopic="addTopic"
        @removeList="removeList"
        @topicsChanged="topicsChanged"
        :currBoardId="currBoard._id"
      ></topics-list>
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
    },
    topicsAsArr() {
      return this.$store.getters.topicsAsArray;
    }
  },
  methods: {
    topicsChanged(map) {
      let board = JSON.parse(JSON.stringify(this.$store.getters.currBoard));
      board.topicTasksMap = map;
      this.$store.dispatch({ type: "setBoard", board });
    },
    addTopic(topic) {
      this.$store.dispatch({ type: "addTopic", topic });
    },
    removeList(topicName) {
      this.$store.dispatch({ type: "removeList", topicName });
    },
    updateList({ topics, topicName }) {
      let board = JSON.parse(JSON.stringify(this.currBoard));
      board.topicTasksMap[topicName] = topics;
      this.$store.dispatch({ type: "setBoard", board });
    }
  },
  created() {
    const id = this.$route.params._id;
    this.currBoard = JSON.parse(JSON.stringify(this.$store.getters.currBoard));
    this.$store.dispatch({ type: "getCurrBoard", id });
  }
};
</script>
