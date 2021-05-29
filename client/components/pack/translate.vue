<template>
  <v-card elevation="10" shaped class="px-5 py-2 mt-5">
    <v-row>
      <v-col lg="4" md="12" sm="12" cols="12">
        <v-text-field
          v-model="dictionary.word"
          label="Слово для перевода"
          @keyup.enter="translate"
        />
      </v-col>
      <v-col lg="4" md="12" sm="12" cols="12">
        <v-text-field
          v-model="dictionary.transcription"
          label="Транскрипция"
        />
      </v-col>
      <v-col lg="4" md="12" sm="12" cols="12">
        <v-text-field
          v-model="dictionary.translate"
          label="Перевод"
          @keyup.enter="addFlashcard"
        />
      </v-col>
    </v-row>
    <v-row class="mt-1">
      <v-col lg="7" cols="12">
        <span v-if="dictionary.synonyms.length">
          Синонимы:
          <span v-for="(syn, index) in dictionary.synonyms" :key="index">
            <v-btn
              class="mx-3 my-2"
              elevation="3"
              @click="choose(syn)"
            >
              {{ syn }}
            </v-btn>
          </span>
        </span>
      </v-col>
      <v-col lg="5" cols="12" class="pt-0">
        <span class="float-right ml-5">
          <v-btn
            class="big-color-btn"
            color="success"
            elevation="10"
            x-large
            @click="addFlashcard"
          >
            Добавить
          </v-btn>
        </span>
        <span class="float-right">
          <v-btn
            class="big-color-btn"
            color="primary"
            elevation="10"
            x-large
            @click="translate"
          >
            Перевести
          </v-btn>
        </span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Translate',
  props: {
    pack: {
      type: Object,
      required: true,
    },
    entity: {
      type: String,
      required: true,
    },
  },
  data: () => ({
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
      languages: state => state.languages.list,
    }),
  },
  methods: {
    translate () {
      if (!this.enteredLanguages())
        return this.$notifier.show('Сначала выберите языки!')

      this.$axios.get('api/dictionary/translate', {
        params: {
          word: this.dictionary.word,
          from: this.languages.find(lang => lang.id === this.pack.first_lang_id).code,
          to: this.languages.find(lang => lang.id === this.pack.second_lang_id).code,
        },
      }).then((res) => {
        this.dictionary.translate = res.data.translate
        this.dictionary.transcription = res.data.transcription
        this.dictionary.synonyms = res.data.synonyms
      }).catch((error) => {
        if (error.response.status === 406)
          this.$notifier.show('Слово или словосочетание не найдено!')
        else
          this.$notifier.show('Упс... Что-то пошло не так!')
      })
    },
    choose (translate) {
      this.dictionary.translate = translate
    },
    addFlashcard () {
      this.$store.commit(this.entity + '/newFlashcard', {
        first_side: this.dictionary.word,
        second_side: this.dictionary.translate,
        transcription: this.dictionary.transcription,
      })
      this.$emit('update')
      this.resetForm()
    },
    resetForm () {
      this.dictionary.word = ''
      this.dictionary.translate = ''
      this.dictionary.transcription = ''
      this.dictionary.synonyms = []
    },
    enteredLanguages () {
      return this.pack.first_lang_id && this.pack.second_lang_id
    },
  },
}
</script>

<style scoped>

</style>
