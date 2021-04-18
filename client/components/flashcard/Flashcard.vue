<template>
  <fieldset :disabled="disabled">
    <v-card
      class="rounded-xl"
      elevation="10"
    >
      <div v-if="!disabled">
        <v-row no-gutters class="mb-3 pt-3 mx-4">
          <v-col v-if="entity === 'packs'" cols="10">
            <v-rating
              color="warning"
              hover
              background-color="grey"
              length="5"
              size="23"
              :value="flashcard.status_id"
              @input="mergeFlashcard({ status_id: $event, index }); $emit('update')"
            />
            <tooltip v-if="index === 0" text="Чем лучше изучено слово (больше звезд) - тем реже оно попадается на тренировках" />
          </v-col>
          <v-col>
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
            <v-col lg="4" cols="12">
              <v-text-field
                :value="flashcard.first_side"
                label="Слово"
                :rules="rules"
                autocomplete="false"
                @blur="$emit('update')"
                @input="mergeFlashcard({ first_side: $event, index })"
              />
            </v-col>
            <v-col lg="4" cols="12">
              <v-text-field
                :value="flashcard.transcription"
                label="Транскрипция"
                autocomplete="false"
                @blur="$emit('update')"
                @input="mergeFlashcard({ transcription: $event, index })"
              />
            </v-col>
            <v-col lg="4" cols="12">
              <v-text-field
                :value="flashcard.second_side"
                label="Перевод"
                :rules="rules"
                autocomplete="false"
                @blur="$emit('update')"
                @input="mergeFlashcard({ second_side: $event, index })"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </fieldset>
</template>

<script>
import Tooltip from '@/components/elements/tooltip'

export default {
  name: 'Flashcard',
  components: {
    Tooltip,
  },
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
      value => !!value || 'Поле обязательно для заполнения',
      value => (value && value.length <= 25) || 'Поле должно быть не длиннее 25 символов',
    ],
  }),
  methods: {
    removeFlashcard (index) {
      this.$store.commit(this.entity + '/removeFlashcard', index)
      this.$emit('update')
    },
    mergeFlashcard (data) {
      this.$store.commit(this.entity + '/mergeFlashcard', data)
    },
  },
}
</script>

<style>
.v-rating {
  display: contents;
}
</style>
