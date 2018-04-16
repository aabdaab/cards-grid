import * as types from '../mutation-types'

const pages = {
  namespaced: true,
  state: {
    currentPage: 0
  },
  mutations: {
    [types.CHANGE_PAGE](state, page) {
      state.currentPage = page
    },
    [types.SET_ERROR](state, error) {
      state = { ...state, error: error }
    }
  },
  getters: {
    currentPage: state => {
      return state.currentPage
    }
  },
  actions: {
    setPage: ({ commit }, pageNum) => {
      commit(types.CHANGE_PAGE, pageNum)
    }
  }
}

export default pages
