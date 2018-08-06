<template>
  <li class="list-item" @click="handleSelection">
    <div class="img-wrapper">
      <img class="img" :src="thumb" />
    </div>
    <span class="label">{{label}}</span>
    <!-- <div class="details">
      <span class="" v-if="calories">&nbsp;Cal: {{calories}}</span>
    </div> -->
  </li>
</template>

<script>
export default {
  name: "list-item",
  props: {
    name: String,
    label: String,
    thumb: String,
    calories: Number,
    qty: Number
  },
  methods: {
    handleSelection() {
      this.$store.dispatch("selectFood", this.$props.name);
      this.$store.dispatch("getDetails", this.$props.name);
    }
  }
};
</script>

<style scoped lang="scss">
.list-item {
  padding: 0.5rem 0.25rem;
  min-height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.9rem;
  text-align: left;
  width: 100%;
  cursor: pointer;
  margin-bottom: 0.25rem;
  color: #000;

  .img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    margin-left: 0.5rem;
    // margin-top: 0.25rem;
    padding: 0.25rem;
    background: transparent;
  }

  .img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 3px;
  }

  .label {
    display: block;
    text-align: left;
    text-transform: capitalize;
    margin-left: 2rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 0.9rem;
    font-size: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &:hover {
    background: #9dc183;
    .label {
      color: #fff;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: 1rem;

    span {
      color: #000;
      font-size: 1rem;
      min-width: 50px;
      text-align: center;
      padding: 0.3rem 0.4rem;
      border-radius: 3px;
      background: #fff;
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
