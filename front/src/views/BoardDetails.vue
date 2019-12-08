<template>
  <section class="board-container">
    <div class="flex">
      <h2 class="board-name" v-if="currBoard">{{currBoard.name}}</h2>
      <button class="delete-board-btn" @click="removeBoard">Delete board</button>
      <div class="flex align-center" v-if="currBoard">
        <div class="board-members-title">Board Members:</div>
        <avatar
          class="member-avatar"
          :username="member.userName"
          v-for="member in currBoard.members"
          :key="member._id"
          :src="member.imgUrl"
          :size="50"
        ></avatar>
      </div>
    </div>

    <button class="activites-menu-btn" @click="activitiesLogIsOpen = !activitiesLogIsOpen">
      <i class="fas fa-ellipsis-h"></i>
      Show Activities
    </button>
    <LogActivities @menuClosed="activitiesLogIsOpen=false" v-if="activitiesLogIsOpen"></LogActivities>
    <div class="topics-container flex">
      <div v-if="topics">
        <topics-list
          :topics="topics"
          :topicsAsArr="topicsAsArr"
          @updateList="updateList"
          @removeList="removeList"
          :currBoardId="currBoard._id"
        ></topics-list>
      </div>
      <div class="add-topic-input-container" :class="{'adding-topic': isAddingTopic}">
        <input
          class="add-topic-input"
          v-model="createdTopicName"
          :class="{'adding-topic-selected': isAddingTopic}"
          placeholder="+ Add another list"
          @focus="toggleAddingTopic()"
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
import Avatar from "vue-avatar";

export default {
  components: {
    TopicsList,
    LogActivities,
    Avatar
  },
  data() {
    return {
      activitiesLogIsOpen: false,
      boardId: null,
      isAddingTopic: false,
      createdTopicName: ""
    };
  },
  computed: {
    currBoard() {
      return JSON.parse(JSON.stringify(this.$store.store.getters.currBoard));
    },
    topics() {
      return this.$store.store.getters.topics;
    },
    topicsAsArr() {
      return this.$store.store.getters.topicsAsArray;
    }
  },
  methods: {
    toggleAddingTopic() {
      this.isAddingTopic = !this.isAddingTopic;
    },
    addList() {
      const topic = this.createdTopicName;
      this.$store.store.dispatch({ type: "addList", topic });
      this.isAddingTopic = false;
      this.createdTopicName = "";
    },
    removeList(topicName) {
      this.$store.store.dispatch({ type: "removeList", topicName });
    },
    updateList(topics) {
      let board = JSON.parse(JSON.stringify(this.currBoard));
      board.topicTasksMap = topics;
      this.$store.store.dispatch({ type: "setBoard", board });
    },
    removeBoard() {
      this.$store.store.dispatch({
        type: "removeBoard",
        boardId: this.boardId
      });
      this.$router.push("/");
    }
  },
  async created() {
    this.boardId = this.$route.params._id;
    await this.$store.store.dispatch({
      type: "getCurrBoard",
      id: this.boardId
    });
    if (this.$store.store.getters.loggedinUser) {
      const user = this.$store.store.getters.loggedinUser;
      let board = this.$store.store.getters.currBoard;
      if (!board.members.find(member => member._id === user._id)) {
        this.$store.store.dispatch({ type: "addMembers", user });
      }
    }
    SocketService.emit("load board", this.$store.store.getters.currBoard);
  },
  destroyed() {
    if (this.$store.store.getters.loggedinUser) {
      let user = this.$store.store.getters.loggedinUser;
      let idx = this.currBoard.members.findIndex(
        member => member._id === user._id
      );
      this.currBoard.members.splice(idx, 1);
      this.$store.store.dispatch({
        type: "updateBoard",
        board: this.currBoard
      });
    }
    SocketService.emit("exit board");
  }
};
</script>

