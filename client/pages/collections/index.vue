<template>
  <div>
    <v-card elevation="5" class="collection-tip px-5 py-3 mb-4">
      Предопределенные наборы слов для копирования к себе и последующего изучения
    </v-card>
    <v-text-field
      v-model="query"
      class="collection-search mb-3"
      solo
      label="Поиск по коллекциям"
      prepend-inner-icon="mdi-magnify"
      @input="search"
    />
    <v-row>
      <v-col
        lg="3"
        md="4"
        sm="6"
        cols="12"
        class="mb-5"
        @click.stop="dialog = true"
      >
        <button class="w-100">
          <v-hover
            v-slot:default="{ hover }"
          >
            <v-card
              class="rounded-xl d-flex align-items-start flex-column p-3 pb-1"
              style="min-height: 200px;"
              :elevation="hover ? 24 : 10"
              :class="{ 'on-hover': hover }"
            >
              <v-container fill-height style="margin-top: 50px">
                <v-row class="justify-center align-center">
                  <v-icon large>
                    mdi-puzzle-plus
                  </v-icon>
                  <span class="pl-4">Добавить</span>
                </v-row>
              </v-container>
            </v-card>
          </v-hover>
        </button>
      </v-col>
      <v-dialog
        v-model="dialog"
        max-width="1000"
      >
        <v-card>
          <v-card-title class="headline">
            Добавить новую коллекцию
          </v-card-title>

          <v-card-text class="pb-0">
            <v-form
              ref="collection_form"
              v-model="valid"
            >
              <pack-header :pack="collection" :entity="'collections'" />
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="green darken-1"
              text
              @click="create"
            >
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-col
        v-for="(collection) in collections"
        :key="collection.id"
        lg="3"
        md="4"
        sm="6"
        cols="12"
        class="mb-5"
      >
        <nuxt-link :to="`/collections/${collection.id}`">
          <v-hover
            v-slot:default="{ hover }"
          >
            <v-card
              class="rounded-xl d-flex align-items-start flex-column p-3 pb-1"
              style="min-height: 200px;"
              :elevation="hover ? 24 : 10"
              :class="{ 'on-hover': hover }"
            >
              <v-card-text class="pt-0 pr-2 text-left w-100 text-muted">
                <small class="text-left">{{ collection.created_at | date }}</small>
                <small v-if="collection.user_id === $auth.user.id" class="float-right">
                  <i slot="extra" class="icon mdi mdi-close-circle collection-delete" @click.prevent="destroy(collection)" />
                </small>
              </v-card-text>
              <v-col class="mb-auto mt-4 p-2 w-100 text-center">
                {{ collection.name }}
                <v-card-text class="p-2 w-100 text-center text-muted">
                  {{ collection.description }}
                </v-card-text>
              </v-col>
              <v-card-text class="pt-0 pr-2 text-left w-100 text-muted">
                <small class="text-left">Рейтинг: {{ collection.count_copies }}</small>
              </v-card-text>
            </v-card>
          </v-hover>
        </nuxt-link>
      </v-col>
    </v-row>
    <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler" />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import PackHeader from '@/components/pack/header'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'Index',
  components: {
    PackHeader,
    InfiniteLoading,
  },
  data () {
    return {
      page: 1,
      valid: true,
      dialog: false,
      query: null,
      infiniteId: +new Date(),
    }
  },
  computed: {
    ...mapState({
      collections: state => state.collections.list,
      collection: state => state.collections.collection,
    }),
  },
  destroyed () {
    this.$store.commit('collections/clear')
  },
  methods: {
    search () {
      this.page = 1
      this.$store.commit('collections/clear')
      this.infiniteId += 1
    },
    create () {
      if (this.$refs.collection_form.validate())
        this.$store.dispatch('collections/create', this.collection).then((res) => {
          this.$notifier.success()
          this.$router.push('/collections/' + res.data.id)
        })
    },
    destroy (collection) {
      if (confirm(`Удалить коллекцию  "${collection.name}"?`))
        this.$store.dispatch('collections/destroy', collection).then(() => {
          this.$store.commit('collections/delete', collection)
          this.$notifier.success()
        }).catch(() => {
          this.$notifier.error()
        })
    },
    infiniteHandler ($state) {
      this.$axios.get('/api/collections', {
        params: {
          page: this.page,
          limit: (this.page === 1 ? 19 : 20),
          search: this.query,
        },
      }).then(({ data }) => {
        if (data.length === (this.page === 1 ? 19 : 20)) {
          this.page += 1
          this.$store.commit('collections/add', data)
          $state.loaded()
        } else {
          this.$store.commit('collections/add', data)
          $state.complete()
        }
      })
    },
  },
}
</script>

<style scoped>
.collection-delete {
  color: #7f7979;
  font-size: 16px;
}
.collection-delete:hover {
  color: #2f2d2d;
}
.collection-tip {
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
}
.collection-search {
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: 0 8px 8px 5px rgba(0, 0, 0, 0.08), 0 5px 8px 0 rgba(0, 0, 0, 0.08), 0 5px 14px 0 rgba(0, 0, 0, 0.08) !important;
  max-height: 48px;
}
</style>
