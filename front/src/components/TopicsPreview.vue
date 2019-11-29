<template>
  <section>
    <div class="topic-list-container column">
      <pre>{{topicName}}</pre>
      <pre>{{topicList}}</pre>
      <draggable
        class="dragArea list-group"
        :list="topicList"
        :group="{ name: 'tasks', pull: pullFunction }"
        @start="start"
      >
        <div
          class="list-group-item column"
          v-for="task in topicList"
          :key="task.id"
          @click="push(task.id)"
        >{{ task.title }}</div>
      </draggable>
    </div>
  </section>
</template>

<script>
import draggable from "vuedraggable";
import rawDisplayer from "vuedraggable";

let idGlobal = 8;
export default {
  props: {
    topicName: String,
    topicList: Array,
    currBoardId: Number,
  },
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    draggable,
    rawDisplayer
  },
  data() {
    return {
      controlOnStart: true,
      topic:null,
      currTaskId: null
    };
  },
  methods: {
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
    push(id) {
      this.$router.push(`${this.currBoardId}/task/edit/${id}`);
    }
  },
  watch:{
    topicList(topicList) {
    topicList = this.topicList
    this.$store.dispatch({type :'setBoard', topicList});

    }

  }
};
</script>
