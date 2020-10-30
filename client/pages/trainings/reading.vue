<template>
  <v-row no-gutters class="h-100">
    <v-col lg="12" class="h-100">
      <v-card class="p-5 h-100">
        <v-carousel
          height="100%"
          hide-delimiters
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            class="h-100"
          >
            <ReadingItem :front="item.eng" :back="item.rus" />
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import ReadingItem from '@/components/trainings/ReadingItem'

export default {
  name: 'Reading',
  components: {
    ReadingItem,
  },
  layout: 'trainings',
  computed: {
    ...mapState({
      pack: state => state.packs.pack,
      items: state => state.storybooks.list,
      packs: state => state.packs.list,
    }),
  },
  watch: {
    pack () {
      this.$store.dispatch('storybooks/get', { pack_id: this.pack.id })
    },
  },
  mounted () {
    this.$store.commit('packs/setPack', this.$store.state.packs.list[0] || {})
  },
}
</script>
