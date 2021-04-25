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
            <v-select
              class="d-inline-block mr-3 copy-types-select"
              :items="copyTypes"
              :value="null"
              @input="copyBy = $event"
              solo
            ></v-select>
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
    copyBy: null,
    copyTypes: [
      {
        text: 'Все',
        value: null,
      },
      {
        text: 'По 5 в наборе',
        value: 5,
      },
      {
        text: 'По 10 в наборе',
        value: 10,
      },
      {
        text: 'По 15 в наборе',
        value: 15,
      },
      {
        text: 'По 20 в наборе',
        value: 20,
      },
    ],
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
      const flashcard_ids = this.collection.flashcards.filter((flashcard) => flashcard.selected).map((flashcard) => flashcard.id)

      this.$axios.post(`/api/collections/${this.$route.params.id}/copy`, { flashcard_ids, copyBy: this.copyBy }).then((res) => {
        this.$notifier.success()
        this.$router.push('/packs/' + res.data.id)
      }).catch(() => {
        this.$notifier.error()
      })
    },
    isCreator () {
      return this.collection.user_id === this.$auth.user.id
    },
  },
}
</script>

<style scoped>
.copy-types-select {
  max-width: 200px;
}
</style>

<style>
.copy-types-select .v-input__slot {
  height: 52px
}
</style>
