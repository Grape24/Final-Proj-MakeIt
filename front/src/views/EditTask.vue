<template>
  <section>
    <router-link :to="'/board/' + this.currBoardId">X</router-link>

    <form @submit.prevent="saveTadk">
      <div>
        <h3>Title:</h3>
        <input type="text" v-model="task.title" placeholder="Enter the title" />
      </div>

      <div>
        <h3>description:</h3>
        <input type="text" v-model="task.description" placeholder="Enter the description" />
      </div>

      <div>
        <h3>Due date:</h3>
        <input type="date" v-model="task.dueDate" />
      </div>

      <button type="submit">Done</button>
    </form>
  </section>
</template>

<script>
import BoadService from "../services/BoardService.js";
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
  }
};
</script>