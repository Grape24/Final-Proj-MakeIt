<template>
  <section class="flex">
    <draggable
      class="flex"
      ghost-class="ghost"
      :list="list"
      @start="dragging = true"
      @end="dragging = false"
    >
      <topics-preview
        @deletList="deleteList"
        @updateList="updateList"
        v-for="(key ,val) in topics"
        :key="val.id"
        :topicList="key"
        :topicName="val"
        :currBoardId="currBoardId"
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
    currBoardId: String
  },
  data() {
    return {
      list: [this.topics],
      isAddingTopic: false,
      createdTopicName: ""
    };
  },
  computed: {
    topicsChanged() {
      return this.topics;
    }
  },
  methods: {
    openTransition() {
      this.isAddingTopic = !this.isAddingTopic;
    },
    convertMapToArr() {
      var result = Object.keys(this.topics).map(key => {
        return { [key]: this.topics[key] };
      });
      this.list = result;
    },
    addTopic() {
      const topic = this.createdTopicName;
      this.$emit("addTopic", topic);
      this.isAddingTopic = false;
      this.createdTopicName = "";
      this.convertMapToArr();
    },
    deleteList(topicName) {
      this.$emit("removeList", topicName);
      this.convertMapToArr();
    },
    updateList() {
      this.$emit("updateList");
    }
  },

  components: {
    TopicsPreview,
    draggable
  },
  mounted() {
    this.convertMapToArr();
  },
  watch: {
    list() {
      var keys = this.list.map(topic => Object.keys(topic));
      var values = this.list.map(task => Object.values(task));
      var map = {};
      for (var i = 0; i < keys.length; i++) {
        map[keys[i]] = values[i].flat();
      }
      this.$emit("topicsChanged", map);
    }
  }
};
</script>

