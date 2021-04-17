<template>
  <v-app>
    <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
      <Sidebar />
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
import Snackbar from '~/components/Snackbar'
import Sidebar from '~/components/sidebar'

export default {
  components: {
    TopNavbar,
    ContentFooter,
    Snackbar,
    Sidebar,
  },
  mounted () {
    // this.$laravel.setPermissions(this.$auth.user.permissions)
    this.$store.dispatch('languages/get')
  },
}
</script>
