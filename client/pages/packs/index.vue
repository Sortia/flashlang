<template>
  <div>
    <v-card elevation="5" shaped class="px-5 py-3 mb-4">
      <!--   todo   -->
      Тут должна быть подсказка что с этими наборами делать...
    </v-card>
    <v-text-field
      class="pack-search mb-3"
      solo
      label="Поиск по наборам"
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
            Добавить новый набор
          </v-card-title>

          <v-card-text class="pb-0">
            <v-form
              ref="form"
              v-model="valid"
            >
              <pack-header :pack="pack" :entity="'packs'" />
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
        v-for="(pack) in packs"
        :key="pack.id"
        lg="3"
        md="4"
        sm="6"
        cols="12"
        class="mb-5"
      >
        <nuxt-link :to="`/packs/${pack.id}`">
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
                <small class="text-left">{{ pack.created_at | date }}</small>
                <small class="float-right">
                  <i slot="extra" class="icon mdi mdi-close-circle pack-delete" @click.prevent="destroy(pack)" />
                </small>
              </v-card-text>
              <v-col class="mb-auto mt-5 p-2 w-100 text-center">
                {{ pack.name }}
              </v-col>
              <v-card-text class="p-2 w-100">
                <v-progress-linear rounded :value="pack.progress" color="green" />
              </v-card-text>
            </v-card>
          </v-hover>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import PackHeader from '@/components/pack/header'

export default {
  name: 'Index',
  components: {
    PackHeader,
  },
  data () {
    return {
      valid: true,
      dialog: false,
    }
  },
  computed: {
    ...mapState({
      packs: state => state.packs.list,
      pack: state => state.packs.pack,
    }),
  },
  mounted () {
    this.$store.dispatch('packs/get')
  },
  methods: {
    search (search) {
      this.$store.dispatch('packs/get', { search })
    },
    create () {
      if (this.$refs.form.validate())
        this.$store.dispatch('packs/create', this.pack).then((res) => {
          this.$notifier.success()
          this.$router.push('/packs/' + res.data.id)
        })
    },
    destroy (pack) {
      if (confirm(`Удалить набор  "${pack.name}"?`))
        this.$store.dispatch('packs/destroy', pack).then(() => {
          this.$notifier.success()
          this.$store.dispatch('packs/get')
        })
    },
  },
}
</script>

<style scoped>
.pack-delete {
  color: #7f7979;
  font-size: 16px;
}
.pack-delete:hover {
  color: #2f2d2d;
}
.pack-search {
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: 0 8px 8px 5px rgba(0, 0, 0, 0.08), 0 5px 8px 0 rgba(0, 0, 0, 0.08), 0 5px 14px 0 rgba(0, 0, 0, 0.08) !important;
  max-height: 48px;
}
</style>
