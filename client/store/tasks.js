const defaultUrl = '/api/tasks'

export const state = () => ({
  list: [],
  task: [],
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
  clear (state) {
    state.list = []
  },
  setTask (state, task = {}) {
    state.task = task
  },
  merge (state, form) {
    state.task = {
      ...state.task,
      ...form,
    }
  },
  mergeAnswer (state, form) {
    if (!state.task.answers)
      state.task.answers = {}

    if (!state.task.answers.list)
      state.task.answers.list = []

    state.task.answers.list[form.index] = form.value
  },
  mergeRight (state, form) {
    if (!state.task.answers)
      state.task.answers = {}

    state.task.answers.right = form.value
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
      commit('setTask', res.data)
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
