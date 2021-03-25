const defaultUrl = '/api/languages'

export const state = () => ({
  list: [],
})

export const mutations = {
  set (state, list) {
    state.list = list
    console.log(state.list)
  },
}

export const actions = {
  get ({ commit }, query) {
    this.$axios.get(`${defaultUrl}`, { params: query }).then((res) => {
      commit('set', res.data)
    })
  },
}
