<template>
  <section>
        <draggable 
          class="flex"
          ghost-class="ghost"
          :move="checkMove"
          :list="list"
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
  created(){
    console.log(this.topics)
    var result = Object.keys(this.topics).map(key => {
                return {[key]: this.topics[key]}
    })
    this.list = result
    console.log(this.list)
  }

};
</script>