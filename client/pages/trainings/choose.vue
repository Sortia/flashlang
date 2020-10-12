<template>
  <v-row no-gutters class="h-100">
    <v-col lg="12" class="h-100">
      <v-card class="p-5 h-100">
        <v-carousel
          height="100%"
          hide-delimiters
          @change="addItem"
        >
          <v-carousel-item
            v-for="(flashcard, i) in items"
            :key="i"
            class="h-100"
            light
          >
            <ChooseItem :front="flashcard.first_side" :back="flashcard.second_side" :choices="choices" :right="right" @right="rightTest" />
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import ChooseItem from '~/components/trainings/ChooseItem'

export default {
  name: 'Flashcards',
  components: {
    ChooseItem,
  },
  layout: 'trainings',
  data () {
    return {
      right: {},
    }
  },
  computed: {
    ...mapState({
      pack: state => state.packs.pack,
      items: state => state.trainings.items,
      packs: state => state.packs.list,
    }),
    choices () {
      // get all flashcards
      let flashcards = this.packs.map(pack => pack.flashcards).flat()
      // shuffle and take four elements
      flashcards = flashcards.filter(el => el.id !== this.right.id).sort(() => Math.random() > 0.5 ? -1 : 1).slice(0, 3)
      // add right element
      flashcards.push(this.right)
      // shuffle
      return flashcards.sort(() => Math.random() > 0.5 ? -1 : 1)
    },
  },
  watch: {
    pack () {
      this.addItem()
      this.addItem()
    },
  },
  mounted () {
    this.$store.commit('packs/setPack', this.$store.state.packs.list[0] || {})

    if (!this.pack.flashcards)
      return this.$router.push('/trainings')

    this.addItem()
  },
  methods: {
    rightTest () {
      this.addItem()

      document.querySelector('.v-window__next button').click()
    },
    addItem () {
      const flashcards = this.pack === 'all' ? this.packs.map(pack => pack.flashcards).flat() : this.pack.flashcards

      if (!flashcards) return

      // except last flashcard (only if count pack flashcards > 1)
      const excepted = flashcards.filter((el) => {
        return this.items.length === 0 || flashcards.length < 2 ? true : el.id !== this.items[this.items.length - 1].id
      })

      this.right = this.$random.from(excepted)

      this.$store.commit('trainings/add', this.right)
    },
  },
}
</script>
