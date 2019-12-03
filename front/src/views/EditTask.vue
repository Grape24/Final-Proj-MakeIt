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
      <div class="flex space-between">
        <div class="main-edit-container">
          <div class="in-list">In List : {{topicName}}</div>
            <div class="due-date-title">Due date</div>
            <date-picker  value-type="timestamp" 
                          placeholder="Select due date"
                          class="date-picker-preview"
                          v-model.number="task.dueDate">{{task.taskDueDate}}
          </date-picker>
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
          <div v-if="task.imgUrl" class="flex align-center">
            <i class="fas fa-paperclip"></i>
            <div class="image-title">Image</div>
          </div>
          <div :class="{rotated: task.imgIsRotated}" class="img-container">
          <img v-if="task.imgUrl" :src="task.imgUrl"/>
          </div>
          <div class="rotate-img-btn" @click.stop="task.imgIsRotated = !task.imgIsRotated" v-if="task.imgUrl">
            <i class="fas fa-undo"></i>
            Rotate Image
          </div>
        </div>
        <div class="edit-nav-bar flex column">
          <div>Add to task:</div>
          <div>
            <div @click="datePickerSelected = !datePickerSelected" 
                  class="due-date">
                  <i class="far fa-clock"></i>Due Date
            </div>
            <div @click="datePickerSelected = false"
                 class="transparent-modal-mask"
                 v-if="datePickerSelected"></div>
            <date-picker v-if="datePickerSelected" 
                          value-type="timestamp" 
                          placeholder="Select due date"
                          class="date-picker"
                          :inline="true"
                          v-model.number="task.dueDate">{{task.taskDueDate}}
          </date-picker>
          </div>
          <div @click="imgAttachmentSelected = false"
                 class="transparent-modal-mask"
                 v-if="imgAttachmentSelected"></div>
          <div @click="imgAttachmentSelected = !imgAttachmentSelected" 
                class="img-attachment">
                <i class="fas fa-image"></i>Image Attachment
          </div>
          <div class="img-uploader" v-if="imgAttachmentSelected">
          <div>Attach and Image</div> 
          <input class="upload-img-input" type="file" @change="uploadImgfunc" />
          </div>
          <div class="add-labels-btn">
            <i class="fas fa-tag">
              </i>Add Labels
          </div>
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
      task: { title: "", description: "", dueDate: null, imgUrl: "", imgIsRotated: false },
      currBoardId: null,
      topicName: "",
      datePickerSelected: false,
      imgAttachmentSelected: false,
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
          imgUrl: this.imgUrl,
          dueDate: this.dueDate,
          imgIsRotated: this.imgIsRotated
        }
      );
      } else {
        await this.$store.dispatch({
          type: "addTask",
          boardId: this.currBoardId,
          task: this.task,
          topic: this.topicName,
          imgUrl: this.imgUrl,
          dueDate: this.dueDate,
          imgIsRotated: this.imgIsRotated
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
        imgUrl: this.imgUrl,
        dueDate: this.dueDate,
        imgIsRotated: this.imgIsRotated
      });
      this.closeEdit();
    },
    closeEdit() {
      this.$router.push("/board/" + this.currBoardId);
      window.location.reload();
    }
  },
  async created() {
    this.topicName = this.$route.params.topic;
    this.currBoardId = this.$route.params._id;
    const taskId = this.$route.params.taskId;
    if (taskId !== "null") {
      let task = await TaskService.getTaskById(this.currBoardId, taskId);
      this.task = JSON.parse(JSON.stringify(task));
    }
  },
  components: {
    DatePicker
  },

};
</script>