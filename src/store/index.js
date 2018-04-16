import Vue from 'vue'
import Vuex from 'vuex'

import photos from './modules/photos'
import pages from './modules/pages'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    photos,
    pages,
  }
})
