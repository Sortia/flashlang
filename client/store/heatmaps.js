const defaultUrl = '/api/heatmaps'

export const state = () => ({
  list: [],
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
}

export const actions = {
  get ({ commit }, params) {
    this.$axios.get(`${defaultUrl}`, { params }).then((res) => {
      commit('set', res.data)
    })
  },
}
