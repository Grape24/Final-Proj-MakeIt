<template>
  <h1>
    <topics-preview v-for="topic in topics" :key="topic.name" :topic="topic"></topics-preview>
  </h1>
</template>

<script>
import TopicsPreview from "./TopicsPreview";
export default {
  components: {
    TopicsPreview
  }
};
</script>