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
        <top-navbar class="elevation-4" />
        <div class="content">
          <div class="h-100">
            <div class="auth-form px-5 mx-3">
              <Nuxt />
            </div>
          </div>
        </div>

        <!--      <dashboard-content @click="toggleSidebar" />-->
        <Snackbar />
        <content-footer />
      </div>
    </div>
  </v-app>
</template>

<script>

import TopNavbar from '~/components/layout/TopNavbar'
import ContentFooter from '~/components/layout/ContentFooter'
import MobileMenu from '~/components/layout/MobileMenu'
import Snackbar from '~/components/Snackbar'

export default {
  components: {
    TopNavbar,
    ContentFooter,
    MobileMenu,
    Snackbar,
  },
  mounted () {
    this.$laravel.setPermissions(this.$auth.user.permissions)
  },
}
</script>
