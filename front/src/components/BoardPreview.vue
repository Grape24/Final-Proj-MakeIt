<template>
  <section>
    <h1>Board preview</h1>
    <pre>name:{{board.name}}</pre>
  </section>
</template>


<script>
export default {
  props: {
    board: Object
  }
};
</script>