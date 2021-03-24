<template>
  <v-card
    class="rounded-xl"
    elevation="10"
  >
    <div v-if="entity === 'packs' || haveEditPermission()">
      <v-row no-gutters class="mb-3 pt-3 mx-4">
        <v-col cols="10">
          <v-rating
            v-if="entity === 'packs'"
            color="warning"
            hover
            background-color="grey"
            length="5"
            size="23"
            :value="flashcard.status_id"
            @input="mergeFlashcard({ status_id: $event, index })"
          />
        </v-col>
        <v-col v-if="haveEditPermission()" cols="2">
          <span class="float-right">
            <i class="nc-icon nc-simple-remove" @click="removeFlashcard(index)" />
          </span>
        </v-col>
      </v-row>
      <v-divider class="mx-4" />
    </div>
    <v-row no-gutters class="my-1 mx-4">
      <v-col cols="12" sm="12" class="pb-0 pt-2">
        <v-row>
          <v-col lg="6" cols="12">
            <v-text-field :disabled="disabled" :value="flashcard.first_side" label="Front" :rules="rules" @input="mergeFlashcard({ first_side: $event, index })" />
          </v-col>
          <v-col lg="6" cols="12">
            <v-text-field :disabled="disabled" :value="flashcard.second_side" label="Back" :rules="rules" @input="mergeFlashcard({ second_side: $event, index })" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

export default {
  name: 'Flashcard',
  props: {
    entity: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
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
      value => (value && value.length <= 25) || 'Name must be less than 25 characters',
    ],
  }),
  computed: {
    route () { // todo move to plugin
      return this.$route.fullPath.split('/').slice(-2, -1)
    },
  },
  methods: {
    removeFlashcard (index) { // todo emit
      this.$store.commit(this.entity + '/removeFlashcard', index)
    },
    mergeFlashcard (data) { // todo emit
      this.$store.commit(this.entity + '/mergeFlashcard', data)
    },
    haveEditPermission () {
      return this.$laravel.hasPermission(this.route + '_edit')
    },

  },
}
</script>
