<template>
  <h1>
    <ul>
      <topics-preview v-for="topic in topics" :key="topic.name" :topic="topic"></topics-preview>
    </ul>
  </h1>
</template>

<script>
import TopicsPreview from "./TopicsPreview";
export default {
  data() {
    return {
      topics: [{ todo: ["task1", "task2"] }, { done: ["task3"] }]
    };
  },
  components: {
    TopicsPreview
  }
};
</script>