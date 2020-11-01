<template>
  <side-bar>
    <mobile-menu slot="content" />
    <sidebar-link to="/profile">
      <i class="nc-icon nc-circle-09" />
      <p>Profile</p>
    </sidebar-link>
    <sidebar-link to="/packs">
      <i class="nc-icon nc-puzzle-10" />
      <p>Packs</p>
    </sidebar-link>
    <sidebar-link to="/collections">
      <i class="nc-icon nc-puzzle-10" />
      <p>Collections</p>
    </sidebar-link>
    <sidebar-link to="/trainings">
      <i class="nc-icon nc-atom" />
      <p>Training</p>
    </sidebar-link>
    <sidebar-link to="/courses">
      <i class="nc-icon nc-chart-pie-35" />
      <p>Courses</p>
    </sidebar-link>
    <sidebar-link to="/notifications">
      <i class="nc-icon nc-bell-55" />
      <p>Notifications</p>
    </sidebar-link>
    <sidebar-link to="/settings">
      <i class="nc-icon nc-settings-gear-64" />
      <p>Settings</p>
    </sidebar-link>
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

</style>
