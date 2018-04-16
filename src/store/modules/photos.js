import { getPhotos } from '../../services/api'
import * as types from '../mutation-types'

const photos = {
  namespaced: true,
  state: {
    photos: [],
    totalPhotosCount: 0,
    order: '',
    sortProperty: '',
    limit: 0,
    isLoading: false
  },
  mutations: {
    [types.SET_PHOTOS] (state, photos) {
      state.photos = photos
    },
    [types.SET_ERROR] (state, error) {
      state = { ...state, error: error }
    },
    [types.SET_TOTAL_COUNT] (state, totalCount) {
      state.totalPhotosCount = totalCount
    },
    [types.SET_ORDER](state, order) {
      state.order = order
    },
    [types.SET_SORT_PROPERTY](state, sortProperty) {
      state.sortProperty = sortProperty
    },
    [types.SET_LIMIT](state, limit) {
      state.limit = limit
    },
    [types.SET_LOADING](state, isLoading) {
      state.isLoading = isLoading
    }
  },
  getters: {
    totalPhotosCount: state => {
      return state.totalPhotosCount
    },
    order: state => {
      return state.order
    },
    sortProperty: state => {
      return state.sortProperty
    },
    limit: state => {
      return state.limit
    },
    isLoading: state => {
      return state.isLoading
    }
  },
  actions: {
    async getPhotos ({ state, commit }, currentPage) {
      try {
        commit(types.SET_LOADING, true)
        getPhotos(currentPage, state.order, state.sortProperty, state.limit).then(({ data, headers }) => {
            commit(types.SET_TOTAL_COUNT, headers['x-total-count'])
            commit(types.SET_PHOTOS, data)
            commit(types.SET_LOADING, false)
        })
      } catch (e) {
        commit(types.SET_ERROR, e)
      }
    },
    setOrder: ({ commit }, order) => {
      commit(types.SET_ORDER, order)
    },
    setSortProperty: ({ commit }, sortProperty) => {
      commit(types.SET_SORT_PROPERTY, sortProperty)
    },
    setLimit: ({ commit }, limit) => {
      commit(types.SET_LIMIT, limit)
    }
  }
}

export default photos
