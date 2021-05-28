const defaultUrl = '/api/courses'

export const state = () => ({
  list: [],
  course: [],
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
  clear (state) {
    state.list = []
  },
  setCourse (state, course = {}) {
    state.course = course
  },
  merge (state, form) {
    state.course = {
      ...state.course,
      ...form,
    }
  },
  delete (state, form) {
    const index = state.list.findIndex(n => n.id === form.id)
    if (index !== -1)
      state.list.splice(index, 1)
  },
  sortLessons (state, form) {
    state.lessons.splice(form.newIndex, 0, this.list.splice(form.oldIndex, 1)[0])
  },

  setLessons (state, { value }) {
    state.pages = value
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
      commit('setCourse', res.data)
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
    return state.course.lessons
  },
}
