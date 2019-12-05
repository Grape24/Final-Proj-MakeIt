<template>
  <section>
    <div class="flex justify-center">
      <div @click="isAddingBoard=true" class="add-board-btn flex align-center justify-center">Add a new board</div>
    </div>
    <div class="flex wrap">
      <board-preview v-for="board in boards" :key="board._id" :board="board"></board-preview>
    </div>
    <div class="modal-mask" v-if="isAddingBoard" @click="isAddingBoard=false"></div>
    <div v-if="isAddingBoard" class="add-board-input-container" :class="{'adding-topic': isAddingBoard}">
    <div class="add-board-modal">
    <div class="flex space-between">
      <input
        class="enter-board-title"
        v-model="createdBoardName"
        placeholder="Enter board title"
      />
      <button class="close-modal-btn" @click="isAddingBoard=false">
        <i class="fas fa-times"></i>
      </button>
      </div>
    <div class="flex">
      <button :class="{'success': isWriting}" class="create-board-btn" @click="addBoard()">Create board</button>
    </div>
    </div>
    </div>
  </section>
</template>

<script>
import boardPreview from "./BoardPreview.vue";

export default {
  props: {
    boards: Array
  },
  components: {
    boardPreview
  },
  data() {
    return {
      isAddingBoard: false,
      createdBoardName: "",
      isWriting: false
    };
  },
  methods: {
    toggleIsAdding() {
      this.isAddingBoard = !this.isAddingBoard;
    },
    addBoard() {
      const board = {
        name: this.createdBoardName,
        createdBy: {},
        members: [],
        activites: [],
        topicTasksMap: { Todo: [], Doing: [], Done: [] }
      };
      this.$emit("addBoard", board);
      this.isAddingBoard = false;
      this.createdBoardName = "";
    },
  },
  watch: {
    createdBoardName(){
      if(this.createdBoardName !== ""){
        this.isWriting = true;
      }
    }
  }
};
</script>
