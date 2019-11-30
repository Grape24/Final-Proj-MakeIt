<template>
  <section>
        <draggable 
          class="flex"
          :list="list"
          ghost-class="ghost"
          :move="checkMove"
          @start="dragging = true"
          @end="dragging = false">
        <topics-preview
          v-for="(key ,val) in topics"
          :key="val.id"
          :topicList="key"
          :topicName="val"
          :currBoardId="currBoardId"
        ></topics-preview>
        </draggable>
    
    <pre>{{topics}}</pre>
    <router-view></router-view>
  </section>
</template>

<script>
import TopicsPreview from "./TopicsPreview";
import draggable from "vuedraggable";
export default {
  props: {
    topics: Object,
    currBoardId: Number,
  },
  data(){
    return {
      list:[
        this.topics
      ]
    }
  },
  methods:{
      checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    }
  },
  components: {
    TopicsPreview,
    draggable
  },

};
</script>