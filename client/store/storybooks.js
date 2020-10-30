const defaultUrl = '/api/storybooks'

export const state = () => ({
  list: [],
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
}

export const actions = {
  get ({ commit }, query) {
    this.$axios.get(`${defaultUrl}`, { params: query }).then((res) => {
      commit('set', res.data)
    })
  },
}
