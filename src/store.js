import Vue from "vue";
import Vuex from "vuex";
import SuggestionModule from "./modules/suggestions";
import DetailsModule from "./modules/details";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    suggestion: SuggestionModule,
    details: DetailsModule
  }
});
