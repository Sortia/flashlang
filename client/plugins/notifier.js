export default (context, inject) => {
  inject('notifier', {
    show(content = '', color = 'pink') {
      context.store.commit('snackbar/showMessage', {content, color})
    },
    error() {
      this.show('Ошибка!', 'pink')
    },
    success() {
      this.show('Успешно!', 'pink')
    },
  })
}
