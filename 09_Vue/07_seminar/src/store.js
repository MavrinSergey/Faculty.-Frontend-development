import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        INCREMENT(state) {
            state.count++;
        },
        DECREMENT(state) {
            state.count--;
        },
    },
});

export default store;
