<template>
  <h1>
    <ul class="flex">
      <topics-preview v-for="(key ,val) in topics" :key="val.id" :topicList="key" :topicName="val"></topics-preview>
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