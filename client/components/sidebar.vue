<template>
  <side-bar>
    <mobile-menu slot="content" />
    <sidebar-link to="/packs">
      <i class="nc-icon nc-grid-45" />
      <p>Мои Наборы</p>
    </sidebar-link>
    <hr class="my-0">
    <sidebar-link to="/profile">
      <i class="nc-icon nc-circle-09" />
      <p>Профиль</p>
    </sidebar-link>
    <sidebar-link to="/vocabulary">
      <i class="nc-icon nc-notes" />
      <p>Словарь</p>
    </sidebar-link>
    <sidebar-link to="/collections">
      <i class="nc-icon nc-puzzle-10" />
      <p>Коллекции</p>
    </sidebar-link>
    <sidebar-link to="/trainings">
      <i class="nc-icon nc-atom" />
      <p>Тренировки</p>
    </sidebar-link>
    <sidebar-link to="/courses">
      <i class="nc-icon nc-map-big" />
      <p>Курсы</p>
    </sidebar-link>
    <div v-if="$auth.user.is_admin">
      <v-divider />
      <sidebar-link to="/manage/courses">
        <i class="nc-icon nc-map-big" />
        <p>Управление курсами</p>
      </sidebar-link>
    </div>
  </side-bar>
</template>

<script>
import MobileMenu from '~/components/layout/MobileMenu'

export default {
  name: 'Sidebar',
  components: {
    MobileMenu,
  },
}
</script>

<style scoped>
  hr {
    background-color: rgba(240, 248, 255, 0.51);
  }
</style>
