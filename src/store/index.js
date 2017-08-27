import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {count: 0};

const mutations = {
  add(state) {
    state.count++;
  },
  minus(state) {
    state.count--;
  }
};

const actions = {
  add: ({commit}) => commit('add'),
  minus: ({commit}) => commit('minus')
};

const getters = {
  sign: ({count}) => {
    if (count > 0) {
      return 'positive';
    }
    if (count < 0) {
      return 'negative';
    }
    return '';
  }
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
