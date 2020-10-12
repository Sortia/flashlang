
export default {
  /*
  ** Nuxt.js root directory
  ** See https://nuxtjs.org/api/configuration-srcdir/
  */
  srcDir: 'client/',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    './assets/css/demo.css',
    './assets/sass/app.scss',
    './assets/sass/light-bootstrap-dashboard.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/helpers.js',
    '~plugins/filters.js',
    '~/plugins/global.js',
    '~/plugins/directives.js',
    '~/plugins/notifier.js',
    '~/plugins/random.js',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // Doc: https://github.com/acidjazz/nuxt-tailvue
    [ 'nuxt-tailvue', { all: true } ],
    '@nuxtjs/vuetify',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  auth: {
    strategies: {
      local: {
        provider: 'laravel/sanctum',
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            withCredentials: true,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
            },
          },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: false,
            withCredentials: true,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
            },
          },
        },
        tokenRequired: false,
        tokenType: false,
      },
    },
  },
  axios: {
    proxy: true,
    credentials: true,
    baseURL: process.env.API_URL,
    headers: {
      accept: 'application/json',
    },
  },

  proxy: {
    '/api': 'http://localhost:8000',
    '/sanctum': 'http://localhost:8000',
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  /*
  ** Runtime Config
  ** See https://nuxtjs.org/guide/runtime-config/
  */
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  // router: {
  //   middleware: [ 'auth' ],
  // },
}
