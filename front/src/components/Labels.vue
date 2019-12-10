<template>
  <section>
    <div class="labels-title">Labels</div>
    <div class="labels-container">
      <div
        v-for="color in colors"
        :key="color"
        @click="selectLabel(color)"
        :class="color"
        class="flex align-center"
      >
        <i v-if="selected(color)" class="fas fa-check"></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { colors: ["green", "yellow", "orange", "red", " purple", "blue"] };
  },
  props: {
    task: Object
  },
  methods: {
    selectLabel(color) {
      let idx = this.task.labels.indexOf(color);
      if (idx === -1) {
        this.$emit("addLabel", color);
        return true;
      } else {
        this.$emit("removeLabel", {color, idx});
        return false;
      }
    },
    selected(color) {
      let idx = this.task.labels.indexOf(color);
      if (idx === -1) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>