<template>
  <section>
    <draggable
      class="flex"
      ghost-class="ghost"
      :list="list"
      @start="dragging = true"
      @end="dragging = false"
    >
      <topics-preview
        @deletList="deleteList"
        v-for="(key ,val) in topics"
        :key="val.id"
        :topicList="key"
        :topicName="val"
        :currBoardId="currBoardId"
      ></topics-preview>
    </draggable>
    <router-view></router-view>
    <button @click="openModal()">+ add topic</button>
    <div v-if="isAddingTopic">
      <input type="text" placeholder="Add new list" v-model="createdTopicName" />
      <button @click="addTopic">V</button>
    </div>
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
    openModal() {
      this.isAddingTopic = !this.isAddingTopic;
    },
    convertMapToArr() {
      var result = Object.keys(this.topics).map(key => {
        return { [key]: this.topics[key] };
      });
      this.list = result;
      console.log(this.list);
    },
    addTopic() {
      const topic = this.createdTopicName;
      this.$emit("addTopic", topic);
      this.isAddingTopic = false;
      this.createdTopicName = "";
      this.convertMapToArr();
    },
    deleteList() {
      this.convertMapToArr();
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
      console.log(map);
      this.$emit("topicsChanged", map);
    }
  }
};
</script>

  
