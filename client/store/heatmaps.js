const defaultUrl = '/api/heatmaps'

export const state = () => ({
  list: [],
  selected: null,
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
  select (state, selected) {
    state.selected = selected
  },
}

export const actions = {
  get ({ commit }, params) {
    this.$axios.get(`${defaultUrl}`, { params }).then((res) => {
      commit('set', res.data)
    })
  },
}
