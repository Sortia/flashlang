const defaultUrl = '/api/lessons'

export const state = () => ({
  list: [],
  lesson: [],
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
  clear (state) {
    state.list = []
  },
  setLesson (state, lesson = {}) {
    state.lesson = lesson
  },
  merge (state, form) {
    state.lesson = {
      ...state.lesson,
      ...form,
    }
  },
  delete (state, form) {
    const index = state.list.findIndex(n => n.id === form.id)
    if (index !== -1)
      state.list.splice(index, 1)
  },
}

export const actions = {
  get ({ commit }, query) {
    this.$axios.get(`${defaultUrl}`, { params: query }).then((res) => {
      commit('set', res.data)
    })
  },
  show ({ commit }, params) {
    this.$axios.get(`${defaultUrl}/${params.id}`).then((res) => {
      commit('setLesson', res.data)
    })
  },
  update ({ commit }, params) {
    return this.$axios.put(`${defaultUrl}/${params.id}`, params)
  },
  create ({ commit }, params) {
    return this.$axios.post(`${defaultUrl}`, params)
  },
  destroy ({ commit }, params) {
    return this.$axios.delete(`${defaultUrl}/${params.id}`, params)
  },
}

export const getters = {
  list: (state) => {
    return state.lesson.tasks
  },
}
