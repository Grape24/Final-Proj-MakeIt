<template>
  <div class="topic-list-container column">
    <pre>{{topicName}}</pre>
    <router-link :to="currTaskLink">
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
          @mousedown="currTaskId = task.id"
        >{{ task.title }}</div>
      </draggable>
    </router-link>
    <rawDisplayer class="col-3" :value="topicList" title="List 1" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import rawDisplayer from "vuedraggable";

let idGlobal = 8;
export default {
  props: {
    topicName: String,
    topicList: Array
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
      currTaskId: null
    };
  },
  methods: {
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    }
  },
  computed: {
    currTaskLink() {
      return `/task/edit/${this.currTaskId}`;
    }
  }
};
</script>
