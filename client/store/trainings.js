export const state = () => ({
  items: [],
  current: {},
})

export const mutations = {
  add (state, item) {
    state.items.push(item)
  },
  remove (state) {
    state.items = []
  },
}
