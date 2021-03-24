<template>
  <v-app>
    <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
      <MainSidebar />
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
import MainSidebar from '~/components/sidebar'
import Snackbar from '~/components/Snackbar'

export default {
  components: {
    TopNavbar,
    Snackbar,
    Sidebar,
    MainSidebar,
  },
  mounted () {
    this.$laravel.setPermissions(this.$auth.user.permissions)
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
