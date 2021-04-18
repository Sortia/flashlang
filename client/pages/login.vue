<template>
  <div class="h-100 pt-5">
    <div class="auth-form mx-auto my-auto col-lg-3 col-md-5">
      <v-card
        class="rounded-xl"
        elevation="10"
      >
        <div class="card-header py-3 text-uppercase text-center">
          Вход в аккаунт
        </div>
        <div class="card-body p-3 text-center">
          <div>
            <v-text-field
              v-model="login.email"
              label="Электронная почта"
            />
          </div>
          <div>
            <v-text-field
              v-model="login.password"
              label="Пароль"
              type="password"
            />
          </div>
          <v-btn
            elevation="10"
            x-large
            class="auth-btn mx-3"
            @click="userLogin"
          >
            Вход
          </v-btn>
          <v-btn
            elevation="10"
            x-large
            class="auth-btn mx-3"
            @click="$router.push('/register')"
          >
            Регистрация
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data () {
    return {
      login: {
        email: '',
        password: '',
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
              email: this.login.email,
              password: this.login.password,
            },
          }).then(() => {
            this.$router.push('/packs')
          })
        }.bind(this))
    },
  },
}
</script>

<style>
body {
  background-color: #f1eeee;
}
</style>

<style scoped>
.auth-btn {
  min-width: 175px !important;
}
</style>
