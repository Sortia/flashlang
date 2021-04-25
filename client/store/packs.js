const defaultUrl = '/api/packs'

export const state = () => ({
  list: [],
  pack: {
    flashcards: [],
  },
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
  setPack (state, pack = {}) {
    state.pack = pack
  },
  newFlashcard (state, form) {
    state.pack.flashcards.push(form)
  },
  removeFlashcard (state, index) {
    state.pack.flashcards.splice(index, 1)
  },
  merge (state, form) {
    state.pack = {
      ...state.pack,
      ...form,
    }
  },
  mergeFlashcard (state, form) {
    const index = form.index
    delete form.index

    state.pack.flashcards[index] = {
      ...state.pack.flashcards[index],
      ...form,
    }
  },
}

export const actions = {
  get ({ commit }, query) {
    return this.$axios.get(`${defaultUrl}`, { params: query }).then((res) => {
      commit('set', res.data)
    })
  },
  show ({ commit }, params) {
    return this.$axios.get(`${defaultUrl}/${params.id}`).then((res) => {
      commit('setPack', res.data)
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
