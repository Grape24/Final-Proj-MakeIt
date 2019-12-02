<template>
  <section>
    <div class="topic-list-container column">
      <div class="topic-header flex space-between">
        <div class="topic-name">{{topicName}}</div>
      
        <button class="delete-list-btn" @click="deleteList()">X</button>
      </div>
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
        >
          <img :src="task.imgUrl" />
          {{ task.title }}
        </div>
      </draggable>
      <rawDisplayer class="col-3" :value="topicList" title="List 1" />
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
    currBoardId: String,
    
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
      currTaskId: null,
      isShowChangeName:false,
      newTopic:this.topicName,
      list: [this.topics],
    };
  },
  methods: {
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
    convertMapToArr() {
      var result = Object.keys(this.topics).map(key => {
        return { [key]: this.topics[key] };
      });
      this.list = result;
    },
    push(id) {
      this.$router.push(
        `${this.currBoardId}/task/edit/${id}/${this.topicName}`
      );
    },
    deleteList() {
      this.$store.dispatch({ type: "removeList", topicName: this.topicName });
      this.$emit("deletList");
    },
    
  },

  watch: {
    topicList(topicList) {
      topicList = this.topicList;
      this.$store.dispatch({ type: "setBoard", topicList });
    },
     newTopic(newTopic){
      this.isShowChangeName=true
      
      
    },
    
  
  },
   
   computed: {
   
  },
};
</script>
