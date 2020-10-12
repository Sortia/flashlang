<template>
  <v-card
    class="rounded-xl"
    elevation="10"
  >
    <v-row no-gutters class="my-3 mx-4">
      <v-col cols="12" sm="10">
        <v-rating
          color="warning"
          hover
          background-color="grey"
          length="5"
          size="23"
          :value="flashcard.status_id"
          @input="mergeFlashcard({ status_id: $event, index })"
        />
      </v-col>
      <v-col cols="12" sm="2">
        <span class="float-right"><i class="nc-icon nc-simple-remove" @click="removeFlashcard(index)" /></span>
      </v-col>
    </v-row>
    <v-divider class="mx-4" />
    <v-row no-gutters class="my-1 mx-4">
      <v-col cols="12" sm="12" class="pb-3 pt-2">
        <v-row>
          <v-col lg="6">
            <v-text-field :value="flashcard.first_side" label="Front" :rules="rules" @input="mergeFlashcard({ first_side: $event, index })" />
          </v-col>
          <v-col lg="6">
            <v-text-field :value="flashcard.second_side" label="Back" :rules="rules" @input="mergeFlashcard({ second_side: $event, index })" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Flashcard',
  props: {
    flashcard: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    rules: [
      value => !!value || 'Required',
    ],
  }),
  methods: {
    ...mapMutations({
      mergeFlashcard: 'packs/mergeFlashcard',
    }),
    removeFlashcard (index) {
      this.$store.commit('packs/removeFlashcard', index)
    },
  },
}
</script>
