<template>
  <section>
    <h1>
      <ul class="flex">
        <topics-preview
          v-for="(key ,val) in topics"
          :key="val.id"
          :topicList="key"
          :topicName="val"
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
    topics: Object
  },
  components: {
    TopicsPreview
  }
};
</script>