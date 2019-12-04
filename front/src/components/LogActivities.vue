<template>
  <section>
    <div class="activities-menu">
      <div @click="closeMenu" class="activities-header flex space-between">
        <div class="activities-menu-title">Activities Log</div>
        <i class="fas fa-times"></i>
      </div>
      <div>{{activities}}</div>
    </div>

  </section>
</template>

<script>

export default {
  props: {
    topics: Object,
    currBoardId: String
  },
  methods:{
    closeMenu(){
      this.$emit('menuClosed');
    }
  },
  computed: {
    activities() {
        return this.$store.getters.activities
        
    }
  }
};
</script>

