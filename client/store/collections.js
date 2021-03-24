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
  setCollection (state, collection = {}) {
    state.collection = collection
  },
  newFlashcard (state) {
    state.collection.flashcards.push({
      first_side: '',
      second_side: '',
    })
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

    console.log(form)

    state.collection.flashcards[index] = {
      ...state.collection.flashcards[index],
      ...form,
    }
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
      commit('setCollection', res.data)
    })
  },
  update ({ commit }, params) {
    return this.$axios.put(`${defaultUrl}/${params.id}`, params)
  },
  create ({ commit }, params) {
    return this.$axios.post(`${defaultUrl}`, params)
  },
}