<template>
  <h1>
    <ul class="flex">
      <topics-preview v-for="topic in topics" :key="topic.name" :topic="topic"></topics-preview>
    </ul>
  </h1>
</template>

<script>
import TopicsPreview from "./TopicsPreview";
export default {
  props: {
    topics: Object
  },
  components: {
    TopicsPreview
  }
};
</script>