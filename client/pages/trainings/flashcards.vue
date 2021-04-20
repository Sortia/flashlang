<template>
  <v-row no-gutters class="h-100">
    <v-col lg="12" class="h-100">
      <v-card class="p-5 h-100">
        <v-carousel
          height="100%"
          hide-delimiters
          @change="next"
        >
          <v-carousel-item
            v-for="(flashcard, i) in items"
            :key="i"
            class="h-100"
          >
            <FlashcardSlider :flashcard="flashcard" />
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import FlashcardSlider from '@/components/trainings/FlashcardSlider'

export default {
  name: 'Flashcards',
  components: {
    FlashcardSlider,
  },
  layout: 'trainings',
  computed: {
    ...mapState({
      pack: state => state.packs.pack,
      items: state => state.trainings.items,
      packs: state => state.packs.list,
    }),
  },
  watch: {
    pack () {
      this.addItem()
      this.addItem()
    },
  },
  created () {
    this.$bus.$on('test-event', () => {
      this.$store.commit('trainings/remove')
      this.$store.dispatch('packs/show', { id: this.pack.id })
    })
  },
  mounted () {
    this.$store.dispatch('packs/get').then(() => {
      this.$store.commit('packs/setPack', this.packs[0])
    })
  },
  beforeDestroy () {
    this.$store.commit('trainings/remove')
  },
  methods: {
    next () {
      this.addItem()
    },
    addItem () {
      if (!this.pack.flashcards) return

      // except last flashcard (only if count pack flashcards > 1)
      const excepted = this.pack.flashcards.filter((el) => {
        return this.items.length === 0 || this.pack.flashcards.length < 2 ? true : el.id !== this.items[this.items.length - 1].id
      })

      this.$store.commit('trainings/add', this.$random.from(excepted))
    },
  },
}
</script>
