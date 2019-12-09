<template>
  <section>
    <h1>Task preview</h1>
    <pre>name:{{task.name}}</pre>
    <router-link :to="taskEditLink"></router-link>
  </section>
</template>


<script>
export default {
  data() {
    return {
      id: null
    };
  },
  computed: {
    taskEditLink() {
      return `/task/edit/${this.id}`;
    }
  },
  created() {
    this.id = this.$route.params._id;
  }
};
</script>