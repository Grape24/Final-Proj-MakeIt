<template>
  <section>
    {{task}}
    <button class="modal-mask" @click="closeEdit">X</button>
    <div class="edit-modal">
      <router-link :to="'/board/' + this.currBoardId">X</router-link>

      <h2>Topic : {{topicName}}</h2>
      <form class="edit-form flex column" @submit.prevent="saveTask">
        <input class="task-title" type="text" v-model="task.title" placeholder="Enter the title" />
        <input
          class="task-description"
          type="text"
          v-model="task.description"
          placeholder="Enter the description"
        />

        <div>
          <h3>Due date:</h3>
          <date-picker value-type="timestamp" v-model.number="task.taskDueDate">{{task.taskDueDate}}</date-picker>
          <div></div>
        </div>

        <div @click="remove">Delete</div>
        <button type="submit">Done</button>
      </form>
    </div>
  </section>
</template>



<script>
import BoadService from "../services/BoardService.js";
import TaskService from "../services/TaskService.js";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  data() {
    return {
      task: { title: "", description: "", dueDate: Date.now() },
      currBoardId: null,
      topicName: ""
    };
  },
  methods: {
    async saveTask() {
      if (this.task.id) {
        await this.$store.dispatch({
          type: "updateTask",
          boardId: this.currBoardId,
          task: this.task,
          topic: this.topicName
        });
        this.closeEdit();
      } else {
        await this.$store.dispatch({
          type: "addTask",
          boardId: this.currBoardId,
          task: this.task,
          topic: this.topicName
        });
        this.closeEdit();
      }
    },
    async remove() {
      await this.$store.dispatch({
        type: "removeTask",
        boardId: this.currBoardId,
        taskId: this.task.id,
        topic: this.topicName
      });
      this.closeEdit();
    },
    closeEdit() {
      this.$router.push("/board/" + this.currBoardId);
    }
  },
  async created() {
    this.topicName = this.$route.params.topic;
    this.currBoardId = this.$route.params._id;
    const taskId = this.$route.params.taskId;
    if (taskId !== 'null') { 
      let task = await TaskService.getTaskById(this.currBoardId, taskId);
      this.task = JSON.parse(JSON.stringify(task));
    }
  },
  components: {
    DatePicker
  }
};
</script>
