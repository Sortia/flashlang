<template>
  <v-row>
    <v-col lg="12" class="pb-0">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-card elevation="10" shaped class="px-5 pb-2">
          <v-row>
            <v-col sm="6" cols="12" class="pb-2">
              <v-text-field
                :value="pack.name"
                label="Название"
                :rules="rules.name"
                auto
                autocomplete="false"
                @input="merge({ name: $event })"
              />
            </v-col>
            <v-col sm="6" cols="12" class="pb-2">
              <v-text-field :value="pack.description" label="Описание" autocomplete="false" :rules="rules.description" @input="merge({ description: $event })" />
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="6" cols="12" class="pt-0">
              <base-select :items="languages" :value="pack.first_lang_id" label="Изучаемый язык" @input="merge({ first_lang_id: $event })" />
            </v-col>
            <v-col sm="6" cols="12" class="pt-0">
              <base-select :items="languages" :value="pack.second_lang_id" label="Родной язык" @input="merge({ second_lang_id: $event })" />
            </v-col>
          </v-row>
        </v-card>
        <v-card elevation="10" shaped class="px-5 py-2 mt-5">
          <v-row>
            <v-col lg="4" md="12">
              <v-text-field
                v-model="dictionary.word"
                label="Слово для перевода"
                @keyup.enter="translate"
              />
            </v-col>
            <v-col lg="4" md="12">
              <v-text-field
                v-model="dictionary.transcription"
                label="Транскрипция"
              />
            </v-col>
            <v-col lg="4" md="12">
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
                  Перевод
                </v-btn>
              </span>
            </v-col>
          </v-row>
        </v-card>
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
import BaseSelect from '@/components/Inputs/BaseSelect'

export default {
  name: 'PackForm',
  components: {
    Flashcard,
    BaseSelect,
  },
  data: () => ({
    valid: true,
    rules: {
      name: [
        value => !!value || 'Поле "Название" обязательно для заполнения!',
        value => (value && value.length <= 50) || 'Название должно быть не длиннее 50 символов!',
      ],
      description: [
        value => (!value || value.length <= 50) || 'Описание должно быть не длиннее 50 символов!',
      ],
    },
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
    addFlashcard () {
      this.$store.commit('packs/newFlashcard', {
        first_side: this.dictionary.word,
        second_side: this.dictionary.translate,
        transcription: this.dictionary.transcription,
      })
      this.resetForm()
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
    translate () {
      if (!this.enteredLanguages())
        return this.$notifier.showMessage({ content: 'Сначала выберите языки!', color: 'pink' })

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
          this.$notifier.showMessage({ content: 'Слово или словосочетание не найдено!', color: 'pink' })
        else
          this.$notifier.showMessage({ content: 'Упс... Что-то пошло не так!', color: 'pink' })
      })
    },
    choose (translate) {
      this.dictionary.translate = translate
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
  .big-color-btn {
    width: 160px;
  }
</style>
