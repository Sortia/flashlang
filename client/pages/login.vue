<template>
  <div class="h-100 row pt-5">
    <div class="auth-form mx-auto my-auto col-lg-3 col-md-5">
      <div class="card">
        <div class="card-header py-3 text-uppercase text-center">
          Login
        </div>
        <button @click="userLogin">
          LOGIN
        </button>
        <nuxt-link to="/packs">
          Link
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data () {
    return {
      login: {
        email: 'mail@mail.ru',
        password: '123',
      },
    }
  },
  methods: {
    userLogin () {
      this.$axios.get('/sanctum/csrf-cookie', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        withCredentials: true,
      })
        .then(function () {
          this.$auth.loginWith('local', {
            data: {
              email: 'mail@mail.ru',
              password: '123',
            },
          }).then(() => {
            this.$router.push('/')
          })
        }.bind(this))
    },
  },
}
</script>
