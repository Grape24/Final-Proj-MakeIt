<template>
  <section class="side-nav-container">
    <div class="activities-menu">
      <div @click="closeMenu" class="activities-header flex space-between">
        <div class="activities-menu-title">Activities Log</div>
        <i class="fas fa-times"></i>
      </div>
      <div class="activity" :key="index" v-for="(activity, index) in activities">
        {{activity.task}} in list {{activity.inTopic}} was {{activity.activity}}
        <div class="time">{{convertTimeStampFormat(activity.DoneAt)}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";
export default {
  props: {
    topics: Object,
    currBoardId: String
  },
  methods: {
    closeMenu() {
      this.$emit("menuClosed");
    },
    convertTimeStampFormat(ts) {
      ts = ts + 1000 * 60 * 60 * 2;
      return moment.utc(ts).calendar();
    }
  },
  computed: {
    activities() {
      return this.$store.getters.activities;
    }
  }
};
</script>


