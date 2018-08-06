<template>
  <ul class="list" v-if="canDisplayList">
    <list-item 
      v-for="item in suggestions"
      :key="item.name"
      v-bind="item"
    />
  </ul>
</template>

<script>
import ListItem from "./list-item.vue";

export default {
  name: "list",
  props: ["suggestions"],
  components: {
    ListItem
  },
  computed: {
    canDisplayList() {
      return this.$props.suggestions.length > 0;
    }
  }
};
</script>


<style scope lang="scss">
.list {
  margin-top: 1rem;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  position: absolute;
  top: 2.5rem;
  background: #fff;
  min-height: 500px;
  max-height: 800px;
  // height: 100%;
  overflow-y: auto;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 100;
}
</style>
