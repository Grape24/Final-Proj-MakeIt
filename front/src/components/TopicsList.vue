<template>
  <section>
        <draggable 
          class="flex"
          :list="topics">
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
        this.topics
      ]
    }
  },
  components: {
    TopicsPreview,
    draggable
  },
  created(){
    console.log(this.topics)
  }
};
</script>