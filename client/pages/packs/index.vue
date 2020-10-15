<template>
  <v-row>
    <v-col
      lg="3"
      md="4"
      sm="6"
      cols="12"
      class="mb-5"
    >
      <nuxt-link :to="`/packs/create`">
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
            <v-card-text class="pt-0 pr-2 text-right w-100 text-muted">
              <small>{{ pack.created_at | date }}</small>
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
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Index',
  computed: {
    ...mapState({
      packs: state => state.packs.list,
    }),
  },
  mounted () {
    this.$store.dispatch('packs/get')
  },
}
</script>
