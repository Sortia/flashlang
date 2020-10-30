import Vue from 'vue'

Vue.directive('add-class-hover', {
  bind (el, binding, vnode) {
    const { value = '' } = binding
    el.addEventListener('mouseenter', () => {
      el.classList.add(value)
    })
    el.addEventListener('mouseleave', () => {
      el.classList.remove(value)
    })
  },
})
