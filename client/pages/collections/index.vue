<template>
  <div>
    <v-card elevation="5" shaped class="px-5 py-3 mb-4">
      <!--   todo   -->
      Тут должна быть подсказка что с этими коллекциями делать...
    </v-card>
    <v-row>
      <v-col
        v-permission="'collections_create'"
        lg="3"
        md="4"
        sm="6"
        cols="12"
        class="mb-5"
      >
        <nuxt-link :to="`/collections/create`">
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
                </v-row>
              </v-container>
            </v-card>
          </v-hover>
        </nuxt-link>
      </v-col>
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
              v-permission="'collections_read'"
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
                  <!--              <v-progress-linear rounded :value="collection.progress" color="green" />-->
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

export default {
  name: 'Index',
  computed: {
    ...mapState({
      collections: state => state.collections.list,
    }),
  },
  mounted () {
    this.$store.dispatch('collections/get')
  },
}
</script>
