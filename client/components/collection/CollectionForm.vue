<template>
  <v-row>
    <v-col lg="12">
      <v-form
        ref="collection_form"
        v-model="valid"
        lazy-validation
      >
        <v-card elevation="10" shaped class="px-5 pb-2">
          <pack-header :pack="collection" :entity="'collections'" :disabled="!isCreator()" @update="save" />
        </v-card>
        <pack-translate v-if="isCreator()" :pack="collection" :entity="'collections'" @update="save" />
        <v-row class="pt-4 mt-5">
          <v-col v-for="(flashcard, index) in collection.flashcards" :key="index" md="6" cols="12">
            <flashcard entity="collections" :flashcard="flashcard" :index="index" :disabled="!isCreator()" @update="save" />
          </v-col>
        </v-row>
        <div class="mt-4">
          <span class="float-right">
            <v-btn
              color="primary"
              elevation="10"
              x-large
              @click="copy"
            >
              Копировать
            </v-btn>
          </span>
        </div>
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
      return this.$refs.collection_form.validate()
    },
    save () {
      if (this.validate())
        this.$store.dispatch('collections/update', this.collection).then((res) => {
          this.$router.push('/collections/' + res.data.id)
        })
    },
    copy () {
      this.$axios.post(`/api/collections/${this.$route.params.id}/copy`).then((res) => {
        this.$notifier.showMessage({ content: 'Успешно!', color: 'pink' })
        this.$router.push('/packs/' + res.data.id)
      })
    },
    isCreator () {
      return this.collection.user_id === this.$auth.user.id
    },
  },
}
</script>
