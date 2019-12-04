<template>
  <section>
    <div class="topic-list-container column">
      <div class="topic-header flex space-between">
        <div class="topic-name">{{topicName}}</div>
        <button class="delete-list-btn" @click="deleteList()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <draggable
        class="dragArea list-group"
        :list="topicList"
        :group="{ name: 'tasks', pull: pullFunction }"
        @start="start"
        @end="end"
      >
        <div
          v-if="task"
          class="list-group-item column"
          v-for="task in topicList"
          :key="task.id"
          @click="push(task.id)"
        >
          <img :class="{'rotated': task.imgIsRotated}" :src="task.imgUrl" />
          {{task.title}}
          <div v-if="task.dueDate">
            <i class="far fa-clock"></i>
            {{convertTimeStampFormat(task.dueDate)}}
          </div>
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
import moment from "moment";

let idGlobal = 8;
export default {
  props: {
    topicName: String,
    topicList: Array,
    currBoardId: String,
    topics: Object
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
  computed: {
    topicListCopy() {
      return [...this.topicList];
    }
  },
  methods: {
    end() {
      // console.log(ev)
      // this.$emit("updateList", {
      //   topic: this.topicListCopy,
      //   topicName: this.topicName
      // });
      this.$emit("endTaskDragging", this.topics);
    },
    convertTimeStampFormat(ts) {
      ts = ts + 1000 * 60 * 60 * 24;
      return moment.utc(ts).calendar();
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
    push(id) {
      this.$router.push(
        `/board/${this.currBoardId}/task/edit/${id}/${this.topicName}`
      );
    },
    deleteList() {
      this.$emit("deletList", this.topicName);
    }
  }
};
</script>
