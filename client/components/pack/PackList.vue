<template>
  <v-row>
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
              <v-progress-linear rounded :value="pack.progress" color="green"></v-progress-linear>
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
  name: 'PackList',
  computed: {
    ...mapState({
      packs: state => state.packs.list,
    }),
  },
}
</script>

<style scoped>

</style>
