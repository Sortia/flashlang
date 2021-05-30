<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" />
      <button
        type="button"
        class="navbar-toggler navbar-toggler-right"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleSidebar"
      >
        <span class="navbar-toggler-bar burger-lines" />
        <span class="navbar-toggler-bar burger-lines" />
        <span class="navbar-toggler-bar burger-lines" />
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="logout">
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      activeNotifications: false,
    }
  },
  computed: {
    routeName () {
      const { name } = this.$route
      return this.capitalizeFirstLetter(name)
    },
  },
  methods: {
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    toggleNotificationDropDown () {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown () {
      this.activeNotifications = false
    },
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar () {
      this.$sidebar.displaySidebar(false)
    },
    logout () {
      this.$cookies.remove('auth._token.local')
      this.$auth.logout()
      this.$router.push('/login')
    },
  },
}

</script>
<style>

</style>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <v-tabs class="tabs">

        <button
          type="button"
          class="navbar-toggler navbar-toggler-right"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleSidebar"
          style="margin-top: 8px;"
        >
          <span class="navbar-toggler-bar burger-lines" />
          <span class="navbar-toggler-bar burger-lines" />
          <span class="navbar-toggler-bar burger-lines" />
        </button>
        <div class="navbar-collapse justify-content-end">
          <ul class="navbar-nav ml-auto logout-link">
            <li class="nav-item">
              <a href="#" class="nav-link" @click="logout">
                Выйти
              </a>
            </li>
          </ul>
        </div>
      </v-tabs>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      activeNotifications: false,
    }
  },
  computed: {
    routeName () {
      const { name } = this.$route
      return this.capitalizeFirstLetter(name)
    },
  },
  methods: {
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    toggleNotificationDropDown () {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown () {
      this.activeNotifications = false
    },
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar () {
      this.$sidebar.displaySidebar(false)
    },
    logout () {
      this.$cookies.remove('laranuxt_session')
      this.$store.commit('users/set', {})
      this.$auth.logout()
      this.$router.push('/login')
    },
    toCreatePack () {
      this.$router.push('/packs/create')
    },
  },
}

</script>

<style lang="scss" scoped>
.logout-link {
  @media screen and (max-width: 959px) {
    display: table;
    margin-top: 5px;
  }
}
</style>
