<template>
  <v-row>
    <v-col lg="12">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <pack-header :pack="collection" :type="'collections'" :disabled="!isCreator()" />
        <pack-translate v-if="isCreator()" :pack="collection" :type="'collections'" />
        <v-row class="pt-4 mt-5">
          <v-col v-for="(flashcard, index) in collection.flashcards" :key="index" md="6" cols="12">
            <flashcard entity="collections" :flashcard="flashcard" :index="index" :disabled="!isCreator()" />
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col sm="6">
            <span v-if="isCreator()" class="float-right">
              <v-btn
                color="success"
                elevation="10"
                x-large
                @click="addFlashcard"
              >
                Добавить
              </v-btn>
            </span>
          </v-col>
          <v-col sm="6">
            <span v-if="isCreator()" class="float-left">
              <v-btn
                color="primary"
                elevation="10"
                x-large
                @click="saveCollection"
              >
                Сохранить
              </v-btn>
            </span>
            <span class="float-right">
              <v-btn
                color="primary"
                elevation="10"
                x-large
                @click="copyCollection"
              >
                Копировать
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
  name: 'CollectionForm',
  components: {
    Flashcard,
    PackHeader,
    PackTranslate,
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
  }),
  computed: {
    ...mapState({
      collection: state => state.collections.collection,
    }),
  },
  beforeDestroy () {
    this.$store.commit('collections/setCollection', { flashcards: [] })
  },
  methods: {
    ...mapMutations({
      merge: 'collections/merge',
    }),
    validate () {
      return this.$refs.form.validate()
    },
    async addFlashcard () {
      await this.$store.commit('collections/newFlashcard')

      // set focus to first flashcard input field
      this.$refs.form.$children.slice(-1).pop().$children[0].$children[2].focus()
    },
    saveCollection () {
      if (this.validate())
        this.$store.dispatch(this.getAction(), this.collection).then((res) => {
          this.$notifier.showMessage({ content: 'Успешно!', color: 'pink' })
          this.$router.push('/collections/' + res.data.id)
        })
    },
    copyCollection () {
      this.$axios.post(`/api/collections/${this.$route.params.id}/copy`).then((res) => {
        this.$notifier.showMessage({ content: 'Успешно!', color: 'pink' })
        this.$router.push('/packs/' + res.data.id)
      })
    },
    getAction () {
      return this.collection.id ? 'collections/update' : 'collections/create'
    },
    isCreator () {
      console.log(this.collection.user_id, this.$auth.user.id)
      return this.collection.user_id === this.$auth.user.id
    },
  },
}
</script>
