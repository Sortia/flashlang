<template>
  <div class="h-100 pt-5">
    <div class="auth-form mx-auto my-auto col-lg-3 col-md-5">
      <v-card
        class="rounded-xl"
        elevation="10"
      >
        <div class="card-header py-3 text-uppercase text-center">
          Регистрация
        </div>
        <div class="card-body p-3 text-center">
          <v-form
            ref="form"
          >
            <div>
              <v-text-field
                v-model="login.name"
                label="Имя"
                :rules="rules.name"
              />
            </div>
            <div>
              <v-text-field
                v-model="login.email"
                label="Электронная почта"
                :rules="rules.email"
              />
            </div>
            <div>
              <v-text-field
                v-model="login.password"
                label="Пароль"
                type="password"
                :rules="rules.password"
              />
            </div>
            <div>
              <v-text-field
                v-model="login.confirm"
                label="Подтверждение"
                type="password"
                :rules="rules.confirm"
              />
            </div>
          </v-form>
          <div class="mt-3 d-flex">
            <v-btn
              elevation="10"
              x-large
              class="auth-btn mx-3"
              @click="register"
            >
              Регистрация
            </v-btn>
            <v-btn
              elevation="10"
              x-large
              class="auth-btn mx-3"
              @click="$router.push('/login')"
            >
              Вход
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'auth',
  data () {
    return {
      login: {
        name: '',
        email: '',
        password: '',
        confirm: '',
      },
      rules: {
        name: [
          value => !!value || 'Поле обязательно для заполнения',
          value => (value && value.length <= 25) || 'Поле должно быть не длиннее 25 символов',
        ],
        email: [
          v => !!v || 'Пожалуйста введите электронную почту!',
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Электронная почта введена не верно!',
        ],
        password: [
          value => !!value || 'Пожалуйста введите пароль!',
          value => (value && value.length >= 6) || 'Минимум 6 символов!',
        ],
        confirm: [
          value => !!value || 'Подтвердите пароль!',
          value => value === this.login.password || 'Пароли не совпадают!',
        ],
      },
    }
  },
  methods: {
    register () {
      if (this.$refs.form.validate())
        this.$axios.post('/api/auth/register', this.login).then(() => {
          this.$auth.loginWith('local', {
            data: {
              email: this.login.email,
              password: this.login.password,
            },
          }).then(() => {
            this.$router.push('/packs')
          })
        })
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
