<template>
  <section>
    <div class="topic-list-container column">
      <div class="topic-name">{{topicName}}</div>
      <draggable
        class="dragArea list-group"
        :list="topicList"
        :group="{ name: 'tasks', pull: pullFunction }"
        @start="start"
      >
        <div 
          v-if="task"
          class="list-group-item column"
          v-for="task in topicList"
          :key="task.id"
          @click="push(task.id)"
        ><img :src="task.imgUrl" />
        {{ task.title }}
        </div>
      </draggable>
      <rawDisplayer class="col-3" :value="topicList" title="List 1" />
      <button @click="onDeleteList()">Delete list</button>
      <button class="add-task-btn" @click="push(null)">+ Add another task</button>
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
      topic: null,
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
      this.$router.push(
        `${this.currBoardId}/task/edit/${id}/${this.topicName}`
      );
    },
    onDeleteList(){
      const topicName=this.topicName
      this.$store.dispatch({ type: "removeList", topicName });
      
    },
  },
 
  watch: {
    topicList(topicList) {
      topicList = this.topicList;
      this.$store.dispatch({ type: "setBoard", topicList });
    }
  }
};
</script>
