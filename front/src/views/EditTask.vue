<template>
  <section>
    <router-link class="modal-mask" :to="'/board/' + this.currBoardId">X</router-link>
    <div class="edit-modal">
    <router-link :to="'/board/' + this.currBoardId">X</router-link>

    <form class="edit-form flex column" @submit.prevent="saveTadk">
      
        <input class="task-title" type="text" v-model="task.title" placeholder="Enter the title" />
        <input class="task-description" type="text" v-model="task.description" placeholder="Enter the description" />

      <div>
        <h3>Due date:</h3>
        <date-picker value-type="timestamp" v-model.number="task.taskDueDate">{{task.taskDueDate}}</date-picker>
        <div></div>
      </div>

      <button type="submit">Done</button>
    </form>
    </div>
  </section>
</template>

<script>
import BoadService from "../services/BoardService.js";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  data() {
    return {
      task: {},
      currBoardId: null
    };
  },
  methods: {
    saveTask() {
      if (this.task.id) {
        this.$store
          .dispatch({ type: "updateTask", task: this.task })
          .then(() => closeEdit());
      } else {
        this.$store
          .dispatch({ type: "addTask", task: this.task })
          .then(() => closeEdit());
      }
    },
    closeEdit() {
      this.$router.push("/board" + this.currBoardId);
    }
  },
  created() {
    const boardId = this.$route.params._id;
    this.currBoardId = boardId;
    const taskId = this.$route.params.taskId;
    if (taskId) {
      BoadService.getTaskById(boardId, taskId).then(task => {
        this.task = JSON.parse(JSON.stringify(task));
      });
    }
  },
  components: {
    DatePicker
  }
};
</script>
