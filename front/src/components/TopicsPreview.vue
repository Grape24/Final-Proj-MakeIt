<template>
  <section class="topic-preview">
    <div class="topic-header flex space-between">
      <div class="topic-name">{{topicName}}</div>
      <button class="delete-list-btn" @click="deleteList()">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="topic-list-container flex column">
      <draggable
        class="dragArea list-group"
        :list="topicList"
        :group="{ name: 'tasks', pull: pullFunction }"
        @start="start"
        @end="end"
      >
        <div v-if="task" class="list-group-item column" v-for="task in topicList" :key="task.id">
          <router-link :to="`/board/${currBoardId}/task/edit/${task.id}/${topicName}`">
            <div class="flex">
              <div
                :class="`${label}-task-label`"
                :key="index"
                v-for="(label, index) in task.labels"
              ></div>
            </div>
            <img :class="{'rotated': task.imgIsRotated}" :src="task.imgUrl" />
            {{task.title}}
            <div class="due-date-display" v-if="task.dueDate">
              <i class="far fa-clock"></i>
              {{convertTimeStampFormat(task.dueDate)}}
            </div>
          </router-link>
        </div>
      </draggable>
      <rawDisplayer class="col-3" :value="topicList" title="List 1" />
    </div>
    <button class="add-task-btn">
      <router-link :to="`/board/${currBoardId}/task/edit/${null}/${topicName}`">+ Add another task</router-link>
    </button>
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
    deleteList() {
      this.$emit("deletList", this.topicName);
    },
    func(ev){
      console.log(ev)
    }
  }
};
</script>
