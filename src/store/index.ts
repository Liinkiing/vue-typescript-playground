import Vue from 'vue';
import Vuex from 'vuex';
import piano from '@/store/modules/piano/index';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    piano,
  },
  strict: debug,
});
