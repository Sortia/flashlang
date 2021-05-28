const defaultUrl = '/api/lesson_items'

export const state = () => ({
  list: [],
  lesson_item: [],
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
  clear (state) {
    state.list = []
  },
  setLessonItem (state, lesson_item = {}) {
    state.lesson_item = lesson_item
  },
  merge (state, form) {
    state.lesson_item = {
      ...state.lesson_item,
      ...form,
    }
  },
  mergeAnswer (state, form) {
    if (!state.lesson_item.answers)
      state.lesson_item.answers = {}

    if (!state.lesson_item.answers.list)
      state.lesson_item.answers.list = []

    state.lesson_item.answers.list[form.index] = form.value
  },
  mergeRight (state, form) {
    if (!state.lesson_item.answers)
      state.lesson_item.answers = {}

    state.lesson_item.answers.right = form.value
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
      commit('setItem', res.data)
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
