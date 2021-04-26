const defaultUrl = '/api/collections'

export const state = () => ({
  list: [],
  collection: {
    flashcards: [],
  },
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
  clear (state) {
    state.list = []
  },
  add (state, list) {
    state.list = state.list.concat(list)
  },
  setCollection (state, collection = {}) {
    state.collection = collection
  },
  newFlashcard (state, form) {
    state.collection.flashcards.push(form)
  },
  removeFlashcard (state, index) {
    state.collection.flashcards.splice(index, 1)
  },
  merge (state, form) {
    state.collection = {
      ...state.collection,
      ...form,
    }
  },
  mergeFlashcard (state, form) {
    const index = form.index
    delete form.index

    state.collection.flashcards[index] = {
      ...state.collection.flashcards[index],
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
  load ({ commit }, query) {
    this.$axios.get(`${defaultUrl}`, { params: query }).then((res) => {
      commit('add', res.data)
    })
  },
  show ({ commit }, params) {
    this.$axios.get(`${defaultUrl}/${params.id}`).then((res) => {
      commit('setCollection', res.data)
    })
  },
  update ({ commit }, params) {
    return this.$axios.put(`${defaultUrl}/${params.id}`, params)
  },
  create ({ commit }, params) {
    return this.$axios.post(`${defaultUrl}`, params)
  },
  destroy ({ commit }, params) {
    commit('delete', params)

    return this.$axios.delete(`${defaultUrl}/${params.id}`, params)
  },
}
