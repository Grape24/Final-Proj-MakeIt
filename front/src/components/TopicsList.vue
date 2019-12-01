<template>
  <section>
        <draggable 
          class="flex">
        <topics-preview
          v-for="(key ,val) in topics"
          :key="val.id"
          :topicList="key"
          :topicName="val"
          :currBoardId="currBoardId"
        ></topics-preview>
        </draggable>
    
    <router-view></router-view>
    <button @click="onAddTopic()">+ add topic</button>
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
    currBoardId: Number,
  },
  data(){
    return {
      list:[
        this.topics
      ],
      isAddingTopic:false,
      createdTopicName:''
    }
  },
  methods :{
    onAddTopic(){
      this.isAddingTopic=true
      
    },
    addTopic(){
      const topic = this.createdTopicName
      this.$store.dispatch({ type: "addTopic", topic });
      this.isAddingTopic=false
    }

  },
  components: {
    TopicsPreview,
    draggable
  },
  
};
</script>