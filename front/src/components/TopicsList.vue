<template>
  <section class="flex">
    <draggable
      class="flex"
      ghost-class="ghost"
      :list="topicsAsArr"
      @start="dragging = true"
      @end="doneDragging"
    >
      <topics-preview
        @endTaskDragging="updateList"
        @deletList="deleteList"
        v-for="(key ,val) in topics"
        :key="val.id"
        :topicList="key"
        :topicName="val"
        :currBoardId="currBoardId"
        :topics="topics"
      ></topics-preview>
    </draggable>
    <div class="modal-mask" v-if="isAddingTopic" @click="isAddingTopic=false"></div>
    <div class="add-topic-input-container" :class="{'adding-topic': isAddingTopic}">
      <input
        class="add-topic-input"
        v-model="createdTopicName"
        :class="{'adding-topic-selected': isAddingTopic}"
        placeholder="+ Add another list"
        @focus="openTransition()"
      />
      <div v-if="isAddingTopic" class="flex">
        <button @click="addTopic()" class="add-topic-btn">Add list</button>
        <button class="close-modal-btn" @click="isAddingTopic=false">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>


<script>
import TopicsPreview from "./TopicsPreview";
import draggable from "vuedraggable";
export default {
  props: {
    topics: Object,
    currBoardId: String,
    topicsAsArr: Array
  },
  data() {
    return {
      isAddingTopic: false,
      createdTopicName: ""
    };
  },
  methods: {
    doneDragging() {
      this.dragging = false;
      var keys = this.topicsAsArr.map(topic => Object.keys(topic));
      var values = this.topicsAsArr.map(task => Object.values(task));
      var map = {};
      for (var i = 0; i < keys.length; i++) {
        map[keys[i]] = values[i].flat();
      }
      this.$emit("topicsChanged", map);
    },
    openTransition() {
      this.isAddingTopic = !this.isAddingTopic;
    },
    addTopic() {
      const topic = this.createdTopicName;
      this.$emit("addTopic", topic);
      this.isAddingTopic = false;
      this.createdTopicName = "";
    },
    deleteList(topicName) {
      this.$emit("removeList", topicName);
    },
    updateList(topics) {
      this.$emit("updateList", topics);
    },
    // updateList2({ topic, topicName }) {
    //   console.log(topic)
    //   this.$emit("updateListt", { topic, topicName });
    // }
  },
  components: {
    TopicsPreview,
    draggable
  }
};
</script>

