import Axios from "axios";

export default {
  state: {
    selectedFood: "",
    foodType: "common",
    loadingInstant: false,
    results: [],
    isLoadingSuggestions: false,
    error: {}
  },
  mutations: {
    selectFood(state, payload) {
      state.selectedFood = payload;
    },
    selectFoodType(state, payload) {
      state.foodType = payload;
    },
    results(state, payload) {
      state.results = payload;
    },
    loadingSuggestions(state) {
      state.isLoadingSuggestions = true;
    },
    suggestionsLoaded(state) {
      state.isLoadingSuggestions = false;
    },
    error(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    selectFood({ commit }, selectedFood) {
      commit("selectFood", selectedFood);
      commit("results", []);
    },
    selectFoodType({ commit }, type) {
      commit("selectFoodType", type);
    },
    clearSuggestions({ commit }) {
      commit("results", []);
    },
    async fetchSuggestions({ state, commit }, query) {
      const url = `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`;
      commit("loadingSuggestions");
      try {
        const response = await Axios.get(url, {
          headers: {
            "x-app-id": "08538c36",
            "x-app-key": "a5fffcc608ff6c1ddd71410488087229"
          }
        });
        commit("suggestionsLoaded");
        const suggestions = response.data[state.foodType].map(x => ({
          name: x.food_name,
          label: x.food_name,
          thumb: x.photo.thumb,
          quantity: x.serving_qty,
          calories: state.foodType === "branded" ? x.nf_calories : null,
          selected: false
        }));
        commit("results", suggestions);
      } catch (error) {
        commit("error", error);
      }
    }
  }
};
