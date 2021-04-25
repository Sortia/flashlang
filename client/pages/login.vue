<template>
  <div class="h-100 pt-5">
    <div class="auth-form mx-auto my-auto col-lg-3 col-md-5">
      <v-card
        class="rounded-xl p-4"
        elevation="10"
      >
        <div class="card-header pt-3 pb-5 text-uppercase text-center">
          Вход в аккаунт
        </div>
        <div class="card-body p-3 text-center">
          <v-form @submit.prevent="userLogin" class="my-3">
            <div>
              <v-text-field
                v-model="login.name"
                label="Имя пользователя"
              />
            </div>
            <div>
              <v-text-field
                v-model="login.password"
                label="Пароль"
                type="password"
              />
            </div>
            <div v-if="error" class="auth-error mb-2 text-left">
              Неверное имя пользователя или пароль
            </div>
            <v-btn
              type="submit"
              elevation="7"
              x-large
              class="auth-btn mt-3"
              color="primary"
              @click="userLogin"
            >
              Войти
            </v-btn>
          </v-form>
          <v-btn
            elevation="7"
            x-large
            class="auth-btn mt-5"
            @click="$router.push('/register')"
          >
            Зарегистрироваться
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      login: {
        name: '',
        password: '',
      },
      error: false
    }
  },
  methods: {
    userLogin() {
      this.$axios.get('/sanctum/csrf-cookie', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        withCredentials: true,
      })
        .then(function () {
          this.$auth.loginWith('local', {
            data: {
              name: this.login.name,
              password: this.login.password,
            },
          }).then(() => {
            this.$router.push('/packs')
          }).catch((data) => {
            if (data.response.status === 403) {
              this.error = true
            }
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
  width: 100%;
}
.auth-error {
  font-family: serif;
  font-size: 14px;
  color: #ff2424;
}
</style>
