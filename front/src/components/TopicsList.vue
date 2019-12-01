<template>
  <section>
<<<<<<< HEAD
    <draggable
      class="flex"
      ghost-class="ghost"
      :move="checkMove"
      @start="dragging = true"
      @end="dragging = false"
    >
      <topics-preview
        v-for="(key ,val) in topics"
        :key="val.id"
        :topicList="key"
        :topicName="val"
        :currBoardId="currBoardId"
      ></topics-preview>
    </draggable>

=======
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
    
>>>>>>> 376b37f3d489c84075c8d73206b1c96eadc42e1a
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
  methods: {
<<<<<<< HEAD
    openModal() {
      this.isAddingTopic = true;
=======
    onAddTopic(){
      this.isAddingTopic=true
>>>>>>> 376b37f3d489c84075c8d73206b1c96eadc42e1a
    },
    addTopic() {
      const topic = this.createdTopicName;
      this.$store.dispatch({ type: "addTopic", topic });
<<<<<<< HEAD
      this.isAddingTopic = false;
    },
    checkMove: function(e) {
=======
      this.isAddingTopic=false
    },
      checkMove: function(e) {
>>>>>>> 376b37f3d489c84075c8d73206b1c96eadc42e1a
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
  
  },
  
  components: {
    TopicsPreview,
    draggable
<<<<<<< HEAD
  }
};
=======
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
>>>>>>> 376b37f3d489c84075c8d73206b1c96eadc42e1a
</script>