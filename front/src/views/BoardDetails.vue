<template>
  <section class="board-container">
    <h2 class="board-name" v-if="currBoard">{{currBoard.name}}</h2>
    <div v-if="currBoard">
      <img class="ratio-square" v-for="member in currBoard.members" :key="member._id" :src="member.imgUrl" alt />
    </div>
    <button class="delete-board-btn" @click="removeBoard">Delete board</button>
    <button class="activites-menu" @click="activitiesLogIsOpen = !activitiesLogIsOpen">
      <i class="fas fa-ellipsis-h"></i>
      Show Activities
    </button>
    <LogActivities @menuClosed="activitiesLogIsOpen=false" v-if="activitiesLogIsOpen"></LogActivities>
    <div class="flex">
    <div v-if="topics">
      <topics-list
        :topics="topics"
        :topicsAsArr="topicsAsArr"
        @updateList="updateList"
        @removeList="removeList"
        @topicsChanged="topicsChanged"
        :currBoardId="currBoard._id"
      ></topics-list>
    </div>
    <!-- <div class="modal-mask" v-if="isAddingTopic" @click="isAddingTopic=false"></div> -->
    <div class="add-topic-input-container" :class="{'adding-topic': isAddingTopic}">
      <input
        class="add-topic-input"
        v-model="createdTopicName"
        :class="{'adding-topic-selected': isAddingTopic}"
        placeholder="+ Add another list"
        @focus="openTransition()"
      />
      <div v-if="isAddingTopic" class="flex">
        <button @click="addList()" class="add-topic-btn">Add list</button>
        <button class="close-modal-btn" @click="isAddingTopic=false">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    </div>
  </section>
</template>
 

<script>
import TopicsList from "../components/TopicsList.vue";
import SocketService from "../services/SocketService.js";
import LogActivities from "../components/LogActivities";

export default {
  components: {
    TopicsList,
    LogActivities
  },
  data() {
    return {
      currBoard: null,
      activitiesLogIsOpen: false,
      boardId: null,
      isAddingTopic: false,
      createdTopicName: ""
    };
  },
  computed: {
    topics() {
      this.currBoard = this.$store.getters.currBoard;
      if (this.currBoard) {
        return this.currBoard.topicTasksMap;
      }
    },
    topicsAsArr() {
      return this.$store.getters.topicsAsArray;
    }
  },
  methods: {
    addList() {
      const topic = this.createdTopicName;
      this.$store.dispatch({ type: "addList", topic });
      this.isAddingTopic = false;
      this.createdTopicName = "";
    },
    openTransition() {
      this.isAddingTopic = !this.isAddingTopic;
    },
    removeBoard() {
      this.$store.dispatch({ type: "removeBoard", boardId: this.boardId });
      this.$router.push("/");
    },
    topicsChanged(map) {
      let board = JSON.parse(JSON.stringify(this.currBoard));
      board.topicTasksMap = map;
      this.$store.dispatch({ type: "setBoard", board });
    },
    addTopic(topic) {
      this.$store.dispatch({ type: "addTopic", topic });
    },
    removeList(topicName) {
      this.$store.dispatch({ type: "removeList", topicName });
    },
    updateList(topics) {
      let board = JSON.parse(JSON.stringify(this.currBoard));
      board.topicTasksMap = topics;
      board.activites.push({
        task: "lists",
        activity: "updated",
        inTopic: "",
        DoneAt: Date.now()
      });
      this.$store.dispatch({ type: "setBoard", board });
    },
    push(id) {
      this.$router.push(`/board/${id}/activties`);
    }
  },
  created() {
    this.boardId = this.$route.params._id;
    this.$store.dispatch({ type: "getCurrBoard", id: this.boardId });
    this.currBoard = JSON.parse(JSON.stringify(this.$store.getters.currBoard));
    const user = sessionStorage.user;
    if (user && this.currBoard) {
      this.$store.dispatch({ type: "addMembers", user });
    }
    SocketService.emit("load board", this.$store.getters.currBoard);
    SocketService.on("board updated", board => {
      this.$store.commit({ type: "setCurrBoard", board });
    });
  }
};
</script>

