const defaultUrl = '/api/users'

export const state = () => ({
  user: {},
})

export const mutations = {
  set (state, user) {
    state.user = user
  },
}

export const actions = {
  show ({ commit }, params) {
    this.$axios.get(`${defaultUrl}/${params.id}`).then((res) => {
      commit('set', res.data)
    })
  },
}
