<template>
  <div class="topic-list-container column">
    <h3>{{topicsKeys}}</h3>
    <draggable
      class="dragArea list-group"
      :list="list1"
      :clone="clone"
      :group="{ name: 'people', pull: pullFunction }"
      @start="start"
    >
      <div
        class="list-group-item column"
        v-for="element in list1"
        :key="element.id"
      >{{ element.name }}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import rawDisplayer from "vuedraggable";

let idGlobal = 8;
export default {
  props: {
    topic: Array
  },
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    draggable,
    rawDisplayer
  },
  data() {
    return {
      list1: [
        { name: "Jesus", id: 1 },
        { name: "Paul", id: 2 },
        { name: "Peter", id: 3 }
      ],
      list2: [
        { name: "Luc", id: 5 },
        { name: "Thomas", id: 6 },
        { name: "John", id: 7 }
      ],
      controlOnStart: true
    };
  },
  methods: {
    clone({ name }) {
      return { name, id: idGlobal++ };
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    }
  },
  computed: {
    topicsKeys() {
      return Object.keys(this.topic)[0];
    }
  }
};
</script>
