<template>
  <v-row>
    <v-col lg="12" class="pb-0">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-card elevation="10" shaped class="px-5 pb-2">
          <pack-header :pack="pack" :entity="'packs'" @update="save" />
        </v-card>
        <pack-translate :pack="pack" :entity="'packs'" @update="save" />

        <v-row class="mt-5">
          <v-col v-for="(flashcard, index) in pack.flashcards" :key="index" md="6" cols="12">
            <flashcard entity="packs" :flashcard="flashcard" :index="index" @update="save" />
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Flashcard from '@/components/flashcard/Flashcard'
import PackHeader from '@/components/pack/header'
import PackTranslate from '@/components/pack/translate'

export default {
  name: 'PackForm',
  components: {
    Flashcard,
    PackHeader,
    PackTranslate,
  },
  data: () => ({
    valid: true,
    dictionary: {
      word: '',
      translate: '',
      transcription: '',
      options: [],
      synonyms: [],
    },
  }),
  computed: {
    ...mapState({
      pack: state => state.packs.pack,
      languages: state => state.languages.list,
    }),
  },
  beforeDestroy () {
    this.$store.commit('packs/setPack', { flashcards: [] })
  },
  methods: {
    ...mapMutations({
      merge: 'packs/merge',
    }),
    validate () {
      return this.$refs.form.validate()
    },
    save () {
      if (this.validate())
        this.$store.dispatch('packs/update', this.pack).then((res) => {
          this.$router.push('/packs/' + res.data.id)
        })
    },
  },
}
</script>

<style scoped>
  .big-color-btn {
    width: 160px;
  }
</style>
