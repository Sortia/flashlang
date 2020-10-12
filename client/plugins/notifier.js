export default (context, inject) => {
  inject('notifier', {
    showMessage ({ content = '', color = '' }) {
      context.store.commit('snackbar/showMessage', { content, color })
    },
  })
}
