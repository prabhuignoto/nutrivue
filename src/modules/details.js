import Axios from "axios";

export default {
  state: {
    data: {
      foodName: "",
      photo: {},
      primaryAttributes: []
    },
    searchInProgress: false
  },
  mutations: {
    updateData(state, payload) {
      state.data = payload;
    },
    updateSearchProgress(state, payload) {
      state.searchInProgress = payload;
    }
  },
  actions: {
    async getDetails({ commit }, name) {
      commit("updateSearchProgress", true);
      try {
        const response = await Axios.post(
          "https://trackapi.nutritionix.com/v2/natural/nutrients",
          {
            query: name
          },
          {
            headers: {
              "x-app-id": "08538c36",
              "x-app-key": "a5fffcc608ff6c1ddd71410488087229",
              "content-type": "application/json"
            }
          }
        );
        commit("updateSearchProgress", false);
        const data = response.data.foods.map(x => ({
          foodName: x.food_name,
          photo: x.photo,
          primaryAttributes: [
            {
              name: "quantity",
              displayName: "Quantity",
              value: x.serving_qty
            },
            {
              name: "unit",
              displayName: "Unit",
              value: x.serving_unit
            },
            {
              name: "weight",
              displayName: "Weight",
              value: x.serving_weight_grams
            },
            {
              name: "calories",
              displayName: "Calories",
              value: x.nf_calories
            },
            {
              name: "totalFat",
              displayName: "Total Fat",
              value: x.nf_total_fat
            },
            {
              name: "saturatedFat",
              displayName: "Saturated Fat",
              value: x.nf_saturated_fat
            },
            {
              name: "cholestrol",
              displayName: "Cholestrol",
              value: x.nf_cholesterol
            },
            {
              name: "sodium",
              displayName: "Sodium",
              value: x.nf_sodium
            },
            {
              name: "totalCarbohydrate",
              displayName: "Total Carbohydrate",
              value: x.nf_total_carbohydrate
            },
            {
              name: "dietaryFiber",
              displayName: "Dietary Fiber",
              value: x.nf_dietary_fiber
            },
            {
              name: "sugars",
              displayName: "Sugars",
              value: x.nf_sugars
            },
            {
              name: "protein",
              displayName: "Protein",
              value: x.nf_protein
            },
            {
              name: "potassium",
              displayName: "Potassium",
              value: x.nf_potassium
            }
          ]
        }))[0];
        commit("updateData", data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
