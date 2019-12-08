<template>
  <section>
    <div class="labels-title">Labels</div>
    <div class="labels-container">
      <div @click="selectLabel('green')" class="green flex align-center">
        <i v-if="selected('green')" class="fas fa-check"></i>
      </div>
      <div @click="selectLabel('yellow')" class="yellow flex align-center">
        <i v-if="selected('yellow')" class="fas fa-check"></i>
      </div>
      <div @click="selectLabel('orange')" class="orange flex align-center">
        <i v-if="selected('orange')" class="fas fa-check"></i>
      </div>
      <div @click="selectLabel('red')" class="red flex align-center">
        <i v-if="selected('red')" class="fas fa-check"></i>
      </div>
      <div @click="selectLabel('purple')" class="purple flex align-center">
        <i v-if="selected('purple')" class="fas fa-check"></i>
      </div>
      <div @click="selectLabel('blue')" class="blue flex align-center">
        <i v-if="selected('blue')" class="fas fa-check"></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
        this.$emit("removeLabel", color);
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