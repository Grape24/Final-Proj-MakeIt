<template>
  <section>
    <button class="modal-mask" @click="closeEdit">X</button>
    <div class="edit-modal">
      <div class="flex align-end">
      <router-link :to="'/board/' + this.currBoardId">
        <i class="fas fa-times"></i>
      </router-link>
      </div>
      <form class="edit-form flex column" @submit.prevent="saveTask">
      <div class="flex align-center">
        <i class="fas fa-sticky-note"></i>
        <input class="task-title" type="text" v-model="task.title" placeholder="Enter the title" />
      </div>
      <div class="flex">
        <div class="main-edit-container">
          <div class="in-list">In List : {{topicName}}</div>
            <div class="flex align-center">
            <i class="fas fa-align-left"></i>
            <div class="description-title">Description</div>
          </div>
          <textarea
            class="task-description"
            type="text"
            v-model="task.description"
            placeholder="Add a more detailed description..."
          />
        </div>
        <div class="flex column">
          <div>Add to task:</div>
          <div>
            <div @click="datePickerSelected = !datePickerSelected" 
                  class="due-date">
                  <i class="far fa-clock"></i>Due Date
            </div>
            <date-picker v-if="datePickerSelected" 
                          value-type="timestamp" 
                          v-model.number="task.taskDueDate">{{task.taskDueDate}}
            </date-picker>
            <div></div>
          </div>
          <div @click="imgAttachmentSelected = !imgAttachmentSelected" 
                class="img-attachment">
                <i class="fas fa-image"></i>Image Attachment
          </div>
          <input v-if="imgAttachmentSelected" type="file" @change="uploadImgfunc" />

          <div @click="remove" class="delete-task"><i class="fas fa-trash-alt"></i>Delete Task</div>
        </div>
      </div>
        <button class="save-task-btn" type="submit">Save</button>
      </form>
    </div>
  </section>
</template>



<script>
import BoadService from "../services/BoardService.js";
import TaskService from "../services/TaskService.js";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { uploadImg } from "../services/CloudinaryService.js";

export default {
  data() {
    return {
      task: { title: "", description: "", dueDate: Date.now(), imgUrl: "" },
      currBoardId: null,
      topicName: "",
      datePickerSelected: false,
      imgAttachmentSelected: false
    };
  },
  methods: {
    async uploadImgfunc(ev) {
      var res = await uploadImg(ev);
      this.task.imgUrl = res.url;
    },
    async saveTask() {
      if (this.task.id) {
        await this.$store.dispatch({
          type: "updateTask",
          boardId: this.currBoardId,
          task: this.task,
          topic: this.topicName,
          imgUrl: this.imgUrl
        });
      } else {
        await this.$store.dispatch({
          type: "addTask",
          boardId: this.currBoardId,
          task: this.task,
          topic: this.topicName,
          imgUrl: this.imgUrl
        });
      }
      this.closeEdit();
    },
    async remove() {
      await this.$store.dispatch({
        type: "removeTask",
        boardId: this.currBoardId,
        taskId: this.task.id,
        topic: this.topicName,
        imgUrl: this.imgUrl
      });
      this.closeEdit();
    },
   closeEdit() {
     console.log(this.currBoardId)
      this.$router.push("/board/" + this.currBoardId);
      window.location.reload();
    }
  },
  async created() {
    this.topicName = this.$route.params.topic;
    this.currBoardId = this.$route.params._id;
    console.log(this.currBoardId)
    const taskId = this.$route.params.taskId;
    if (taskId !== "null") {
      let task = await TaskService.getTaskById(this.currBoardId, taskId);
      this.task = JSON.parse(JSON.stringify(task));
    }
  },
  components: {
    DatePicker
  }
};
</script>
