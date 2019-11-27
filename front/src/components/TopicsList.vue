<template>
  <h1>
    <topics-preview v-for="topic in topics" :key="topic.name" :topic="topic"></topics-preview>
  </h1>
</template>

<script>
import TopicsPreview from "./TopicsPreview";
export default {
  data() {
    return {
      topics: [{ todo: ["task1", "task2"] }]
    };
  },
  components: {
    TopicsPreview
  }
};
</script>