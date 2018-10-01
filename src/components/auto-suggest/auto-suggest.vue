<template>
  <div class="auto-suggest-wrapper">
    <div class="food-type-wrapper">
      <div class="food-type">
        <input type="radio" name="foodtype" value="common" id="common-food" @change="handleChange" checked="checked" />
        <label for="common-food" class="form-label">Common Food</label>
      </div>
      <div class="food-type">
        <input type="radio" name="foodtype" value="branded" id="branded-food" @change="handleChange"/>
        <label for="branded-food" class="form-label">Branded Food</label>
      </div>
    </div>
    <div class="input-wrapper">
      <input
        type="text"
        ref="inputRef"
        name="auto-suggest"
        id="auto-suggest"
        @input="handleInput"
        @keyup.esc="clearSuggestions"
        placeholder="Search for a food."
      >
      <button @click="clearField" class="btn-clear" v-if="canShowClearButton">
        <font-awesome-icon icon="times" size="1x" />
      </button>
      <list :suggestions="suggestions" />
      <i v-if="loading" class="spinner">
        <img src="../../assets/spinner.gif" />
      </i>
      <!-- <loader v-if="loading" /> -->
    </div>
    <!-- <span class="selected-food">{{selectedFood}}</span> -->
  </div>
</template>

<script>
import List from "./list";
import Loader from "../loader";
import _ from "lodash";
import { mapState } from "vuex";

export default {
  name: "auto-suggest",
  components: {
    List,
    Loader
  },
  data: function() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    canShowClearButton() {
      return !!this.searchTerm;
    },
    ...mapState({
      suggestions: ({ suggestion }) => suggestion.results,
      foodType: ({ suggestion }) => suggestion.foodType,
      loading: ({ suggestion }) => suggestion.isLoadingSuggestions,
      selectedFood: ({ suggestion }) => suggestion.selectedFood
    })
  },
  methods: {
    clearField() {
      this.$store.dispatch("clearSuggestions");
      this.$refs.inputRef.value = "";
      this.$refs.inputRef.focus();
    },
    clearSuggestions() {
      this.$store.dispatch("clearSuggestions");
    },
    handleChange(ev) {
      this.$store.dispatch("selectFoodType", ev.target.value);
      const val = this.$refs.inputRef.value;
      if (val) {
        this.$store.dispatch("fetchSuggestions", val);
      }
    },
    handleInput: _.debounce(async function(ev) {
      const value = ev.target.value;
      if (value && [...value].length > 2) {
        this.searchTerm = value;
        this.$store.dispatch("fetchSuggestions", value);
      }
    }, 700)
  }
};
</script>

<style lang="scss" scoped>
.food-type-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.auto-suggest-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-width: 200px;
  padding: 1.25rem 0.5rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
  position: relative;
  background: #54621B;
  border-radius: 3px;
  flex-wrap: wrap;
  /* box-shadow: 0 5px 5px 1px rgba(0,0,0,0.95); */
  input {
    border: 2px solid rgba($color: #fff, $alpha: 1);
    border-radius: 4px;
    padding-left: 0.75rem;
    font-size: 1rem;
  }

  .btn-clear {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .food-type-wrapper {
    margin: 0.25rem 0.75rem 0.25rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 2rem;

    .food-type {
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: rgba($color: #fff, $alpha: 1);
      font-size: 1.2rem;
      cursor: pointer;
      &:nth-child(2) {
        margin-left: 1rem;
      }
    }
  }

  input[type="text"] {
    width: 100%;
    outline: none;
  }

  .input-wrapper {
    display: flex;
    position: relative;
    width: 500px;
    height: 45px;
    margin-left: 1rem;
    position: relative;
  }

  .form-label {
    white-space: nowrap;
    margin-left: 0.25rem;
  }

  .selected-food {
    display: block;
    font-size: 1.5rem;
    color: #fff;
    margin-left: auto;
    text-transform: capitalize;
    margin-right: 1.25rem;
  }

  .spinner {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 3rem;
    height: 3rem;
  }
}
</style>
