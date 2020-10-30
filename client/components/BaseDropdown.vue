<template>
  <li
    :is="tag"
    v-click-outside="closeDropDown"
    class="dropdown nav-item"
    :class="{show: isOpen}"
    aria-haspopup="true"
    :aria-expanded="isOpen"
    @click="toggleDropDown"
  >
    <a
      class="nav-link dropdown-toggle"
      data-toggle="dropdown"
    >
      <slot name="title">
        <i :class="icon" />
        <span class="no-icon">{{ title }}</span>
        <b class="caret" />
      </slot>
    </a>
    <div v-show="isOpen" class="dropdown-menu show">
      <slot />
    </div>
  </li>
</template>
<script>
export default {
  name: 'BaseDropdown',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: String,
    icon: String,
    tag: {
      type: String,
      default: 'li',
    },
  },
  data () {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleDropDown () {
      this.isOpen = !this.isOpen
      this.$emit('change', this.isOpen)
    },
    closeDropDown () {
      this.isOpen = false
      this.$emit('change', this.isOpen)
    },
  },
}
</script>
<style scoped>
  .dropdown .dropdown-toggle{
    cursor: pointer;
  }
</style>
