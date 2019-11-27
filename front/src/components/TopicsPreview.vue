<template>
  <section>
    <li>
      {{topic}}
      <button @click="edit">Edit</button>
    </li>
  </section>
</template>

<script>
export default {
  props: {
    topic: Object
  },
  methods: {
    edit() {
      console.log(this.topic);
    }
  }
};
</script>