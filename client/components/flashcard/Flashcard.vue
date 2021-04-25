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
              @input="merge({ status_id: $event, index }); $emit('update')"
            />
            <tooltip v-if="index === 0" text="Чем лучше изучено слово (больше звезд) - тем реже оно попадается на тренировках" />
          </v-col>
          <v-col v-if="entity === 'collections'" cols="10">
            <button type="button" @click="selected = !selected; merge({ selected: selected, index })">
              <i v-if="selected" slot="extra" class="icon mdi mdi-check add-icon"></i>
              <i v-else slot="extra" class="icon mdi mdi-close add-icon"></i>
              <tooltip v-if="index === 0" text="Можно выбрать какие слова добавить себе в набор" />
            </button>
          </v-col>

          <v-col>
          <span class="float-right">
            <i slot="extra" class="icon mdi mdi-close-circle" style="color: #7f7979" @click="remove(index)"></i>
          </span>
          </v-col>
        </v-row>
        <v-divider class="mx-4 my-2" />
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
                @input="merge({ first_side: $event, index })"
              />
            </v-col>
            <v-col lg="4" cols="12">
              <v-text-field
                :value="flashcard.transcription"
                label="Транскрипция"
                autocomplete="false"
                @blur="$emit('update')"
                @input="merge({ transcription: $event, index })"
              />
            </v-col>
            <v-col lg="4" cols="12">
              <v-text-field
                :value="flashcard.second_side"
                label="Перевод"
                :rules="rules"
                autocomplete="false"
                @blur="$emit('update')"
                @input="merge({ second_side: $event, index })"
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
    selected: true,
    rules: [
      value => !!value || 'Поле обязательно для заполнения',
      value => (value && value.length <= 25) || 'Поле должно быть не длиннее 25 символов',
    ],
  }),
  mounted() {
    this.merge({ selected: this.selected, index: this.index })
  },
  methods: {
    remove (index) {
      this.$store.commit(this.entity + '/remove', index)
      this.$emit('update')
    },
    merge (data) {
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

<style scoped>
.add-icon {
  font-size: 20px;
  margin-left: 8px;
}
</style>
