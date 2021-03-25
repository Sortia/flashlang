<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <v-tabs class="tabs">
        <v-tab @click="toCreatePack">
          New Pack
        </v-tab>
      </v-tabs>
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
      console.log(this.$cookies.get('auth._token.local'))
      this.$cookies.remove('auth._token.local')
      this.$auth.logout()
      this.$router.push('/login')
      // console.log(this.$cookies.get('auth._token.local'))
    },
    toCreatePack () {
      this.$router.push('/packs/create')
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

<!--        <button-->
<!--          type="button"-->
<!--          class="navbar-toggler navbar-toggler-right"-->
<!--          aria-controls="navigation-index"-->
<!--          aria-expanded="false"-->
<!--          aria-label="Toggle navigation"-->
<!--          @click="toggleSidebar"-->
<!--        >-->
<!--          <span class="navbar-toggler-bar burger-lines" />-->
<!--          <span class="navbar-toggler-bar burger-lines" />-->
<!--          <span class="navbar-toggler-bar burger-lines" />-->
<!--        </button>-->
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav ml-auto">
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
      console.log(this.$cookies.get('auth._token.local'))
      this.$cookies.remove('auth._token.local')
      this.$auth.logout()
      this.$router.push('/login')
    },
    toCreatePack () {
      this.$router.push('/packs/create')
    },
  },
}

</script>
