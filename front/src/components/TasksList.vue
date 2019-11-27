<template>
  <h1>
    <task-preview v-for="task in tasks" :key="task.name" :task="task"></task-preview>
  </h1>
</template>

<script>
import TaskPreview from "./TaskPreview";
export default {
  components: {
    TaskPreview
  }
};
</script>