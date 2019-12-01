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
  methods: {
    onAddTopic(){
      this.isAddingTopic=true
    },
    addTopic(){
      const topic = this.createdTopicName
      this.$emit('addTopic',topic)
      this.isAddingTopic=false
    },
      checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
  
  },
  
  components: {
    TopicsPreview,
    draggable
  },
  created(){
    var result = Object.keys(this.topics).map(key => {
                return {[key]: this.topics[key]}
    })
    this.list = result
  },
  watch: {
    list(){
      var keys = this.list.map((topic) => Object.keys(topic))
      var values = this.list.map((task) => Object.values(task))
      var map = {}
      for (var i = 0; i < keys.length; i++){
        map[keys[i]] = values[i].flat();
      }
      this.$emit('topicsChanged', map)
    }
  }
  
}
</script>