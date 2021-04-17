<template>
  <v-row>
    <v-col lg="12" class="pb-0">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <pack-header :pack="pack" :type="'packs'" />
        <pack-translate :pack="pack" />

        <v-row class="mt-5">
          <v-col v-for="(flashcard, index) in pack.flashcards" :key="index" md="6" cols="12">
            <flashcard entity="packs" :flashcard="flashcard" :index="index" />
          </v-col>
        </v-row>
        <v-row class="mt-1">
          <v-col sm="12" class="pb-0">
            <span class="float-right mr-5">
              <v-btn
                class="big-color-btn"
                color="success"
                elevation="10"
                x-large
                @click="savePack"
              >
                Сохранить
              </v-btn>
            </span>
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
    savePack () {
      if (this.validate())
        this.$store.dispatch(this.getAction(), this.pack).then((res) => {
          this.$notifier.showMessage({ content: 'Успешно!', color: 'pink' })
          this.$router.push('/packs/' + res.data.id)
        })
    },
    getAction () {
      return this.pack.id ? 'packs/update' : 'packs/create'
    },
  },
}
</script>

<style scoped>
  .big-color-btn {
    width: 160px;
  }
</style>
