<template>
  <section>
    <h1>
      <ul class="flex">
        <topics-preview
          v-for="(key ,val) in topics"
          :key="val.id"
          :topicList="key"
          :topicName="val"
          :currBoardId="currBoardId"
        ></topics-preview>
      </ul>
    </h1>
    <router-view></router-view>
  </section>
</template>

<script>
import TopicsPreview from "./TopicsPreview";
export default {
  props: {
    topics: Object,
    currBoardId: Number
  },
   watch:{
    topics() {
      console.log(this.topics)
      // this.$store.dispatch({type :'setBoards', topic});

    }

  },
  components: {
    TopicsPreview
  },
};
</script>