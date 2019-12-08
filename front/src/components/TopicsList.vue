<template>
  <section class="flex topics-list">
    <draggable
      class="flex draggable-list"
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
    deleteList(topicName) {
      this.$emit("removeList", topicName);
    },
    updateList(topics) {
      this.$emit("updateList", topics);
    }
  },
  components: {
    TopicsPreview,
    draggable
  }
};
</script>

