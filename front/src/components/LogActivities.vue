<template>
  <section>
    <h1>{{activities}}</h1>

  </section>
</template>

<script>

export default {
  props: {
    topics: Object,
    currBoardId: String
  },
  data() {
    return {
     
    };
  },
  
  
  methods: {
    
    },
    
    
    
    
  
  
  computed: {
    activities() {
        return this.$store.getters.activities
        
    }
  }
};
</script>

