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
            <v-col sm="6" cols="12">
              <v-text-field :disabled="!haveEditPermission()" :value="collection.name" label="Name" :rules="nameRules" @input="merge({ name: $event })" />
            </v-col>
            <v-col sm="6" cols="12">
              <v-text-field :disabled="!haveEditPermission()" :value="collection.description" label="Description" :rules="descriptionRules" @input="merge({ description: $event })" />
            </v-col>
          </v-row>
        </v-card>
        <v-row class="pt-4 mt-5">
          <v-col v-for="(flashcard, index) in collection.flashcards" :key="index" md="6" cols="12">
            <flashcard entity="collections" :flashcard="flashcard" :index="index" :disabled="!haveEditPermission()" />
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col sm="6">
            <span v-if="haveEditPermission()" class="float-right">
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
            <span v-if="haveEditPermission()" class="float-left">
              <v-btn
                color="primary"
                elevation="10"
                x-large
                @click="saveCollection"
              >
                Save
              </v-btn>
            </span>
            <span class="float-right">
              <v-btn
                color="primary"
                elevation="10"
                x-large
                @click="copyCollection"
              >
                Copy
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

export default {
  name: 'CollectionForm',
  components: {
    Flashcard,
  },
  data: () => ({
    valid: true,
    nameRules: [
      value => !!value || 'Required',
      value => (value && value.length <= 10) || 'Name must be less than 10 characters',
    ],
    descriptionRules: [
      value => !!value || 'Required',
      value => (value && value.length <= 100) || 'Name must be less than 100 characters',
    ],
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
          this.$notifier.showMessage({ content: 'Successful saved!', color: 'pink' })
          this.$router.push('/collections/' + res.data.id)
        })
    },
    copyCollection () {
      this.$axios.post(`/api/collections/${this.$route.params.id}/copy`).then((res) => {
        this.$notifier.showMessage({ content: 'Successful saved!', color: 'pink' })
        this.$router.push('/packs/' + res.data.id)
      })
    },
    getAction () {
      return this.collection.id ? 'collections/update' : 'collections/create'
    },
    haveEditPermission () {
      return this.$laravel.hasPermission('collections_edit')
    },
  },
}
</script>