<template>
  <v-row>
    <v-col lg="12">
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
              <base-select :items="languages" :value="pack.second_lang_id" label="Родной язык" @input="merge({ first_lang_id: $event })" />
            </v-col>
          </v-row>
        </v-card>
        <v-row class="mt-5">
          <v-col v-for="(flashcard, index) in pack.flashcards" :key="index" md="6" cols="12">
            <flashcard entity="packs" :flashcard="flashcard" :index="index" />
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col sm="6">
            <span class="float-right">
              <v-btn
                color="success"
                elevation="10"
                x-large
                @click="addFlashcard"
              >
                Add
              </v-btn>
            </span>
          </v-col>
          <v-col sm="6">
            <span class="float-left">
              <v-btn
                color="primary"
                elevation="10"
                x-large
                @click="savePack"
              >
                Save
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
    items: [ 'Foo', 'Bar', 'Fizz', 'Buzz' ],
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
    async addFlashcard () {
      await this.$store.commit('packs/newFlashcard')

      // set focus to first flashcard input field
      this.$refs.form.$children.slice(-1).pop().$children[0].$children[2].focus()
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
