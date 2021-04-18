<template>
  <div>
    <v-card elevation="5" shaped class="px-5 py-3 mb-4">
      <!--   todo   -->
      Тут должна быть подсказка что с этими коллекциями делать...
    </v-card>
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
              <v-card-text class="pt-0 pr-2 text-right w-100 text-muted">
                <small>{{ collection.created_at | date }}</small>
              </v-card-text>
              <v-col class="mb-auto mt-4 p-2 w-100 text-center">
                {{ collection.name }}
                <v-card-text class="p-2 w-100 text-center text-muted">
                  {{ collection.description }}
                </v-card-text>
              </v-col>
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
      collections: state => state.collections.list,
      collection: state => state.collections.collection,
    }),
  },
  mounted () {
    this.$store.dispatch('collections/get')
  },
  methods: {
    create () {
      if (this.$refs.collection_form.validate())
        this.$store.dispatch('collections/create', this.collection).then((res) => {
          this.$notifier.showMessage({ content: 'Успешно!', color: 'pink' })
          this.$router.push('/collections/' + res.data.id)
        })
    },
  },
}
</script>
