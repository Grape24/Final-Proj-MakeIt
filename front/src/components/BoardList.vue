<template>
  <section>
    <board-preview v-for="board in boards" :key="board._id" :board="board"></board-preview>
    <div class="modal-mask" v-if="isAddingBoard" @click="isAddingBoard=false"></div>
    <div class="add-topic-input-container" :class="{'adding-topic': isAddingBoard}">
      <input
        class="add-topic-input"
        v-model="createdBoardName"
        :class="{'adding-topic-selected': isAddingBoard}"
        placeholder="+ Add another board"
        @focus="toggleIsAdding()"
      />
      <div class="flex">
        <button @click="addBoard()" class="add-topic-btn">Add new board</button>
        <button class="close-modal-btn" @click="isAddingBoard=false">
          <i class="fas fa-times"></i>
        </button>
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
      createdBoardName: ""
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
    }
  }
};
</script>
