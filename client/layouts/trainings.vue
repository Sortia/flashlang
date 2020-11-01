<template>
  <v-app>
    <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
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
      <div class="main-panel">
        <top-navbar class="w-100 position-absolute" style="z-index: 100; top: 0" />
        <div class="content ml-0 mb-0 p-0 h-100" style="min-height: 1000px">
          <v-row no-gutters class="h-100" style="padding-top: 59px;">
            <v-col sm="9" xl="10" class="h-100">
              <Nuxt min-height="950px" />
            </v-col>
            <v-col sm="3" xl="2" class="h-100">
              <sidebar />
            </v-col>
          </v-row>
        </div>
        <Snackbar />
      </div>
    </div>
  </v-app>
</template>

<script>

import Sidebar from '@/components/pack/sidebar'
import TopNavbar from '~/components/layout/TopNavbar'
import MobileMenu from '~/components/layout/MobileMenu'
import Snackbar from '~/components/Snackbar'

export default {
  components: {
    TopNavbar,
    MobileMenu,
    Snackbar,
    Sidebar,
  },
  mounted () {
    this.$store.dispatch('packs/get')
  },
}
</script>

<style scoped>
.main-panel {
  max-height: 100vh !important;
}

.main-panel .content {
  position: absolute;
  width: 100%;
}
</style>
