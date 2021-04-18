<template>
  <div>
    <v-row>
      <v-col sm="6" cols="12" class="pb-2">
        <v-text-field
          :disabled="disabled"
          :value="pack.name"
          label="Название"
          :rules="rules.name"
          auto
          autocomplete="false"
          @blur="$emit('update')"
          @input="merge({ name: $event })"
        />
      </v-col>
      <v-col sm="6" cols="12" class="pb-2">
        <v-text-field
          :disabled="disabled"
          :value="pack.description"
          label="Описание"
          autocomplete="false"
          :rules="rules.description"
          @blur="$emit('update')"
          @input="merge({ description: $event })"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" cols="12" class="pt-0">
        <base-select :disabled="disabled" :items="languages" :value="pack.first_lang_id" label="Изучаемый язык" @input="merge({ first_lang_id: $event }); $emit('update')" />
      </v-col>
      <v-col sm="6" cols="12" class="pt-0">
        <base-select :disabled="disabled" :items="languages" :value="pack.second_lang_id" label="Родной язык" @input="merge({ second_lang_id: $event }); $emit('update')" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BaseSelect from '@/components/Inputs/BaseSelect'
import { mapState } from 'vuex'

export default {
  name: 'Header',
  components: {
    BaseSelect,
  },
  props: {
    pack: {
      type: Object,
      required: true,
    },
    entity: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      rules: {
        name: [
          value => !!value || 'Поле "Название" обязательно для заполнения!',
          value => (value && value.length <= 50) || 'Название должно быть не длиннее 50 символов!',
        ],
        description: [
          value => (!value || value.length <= 50) || 'Описание должно быть не длиннее 50 символов!',
        ],
      },
    }
  },
  computed: {
    ...mapState({
      languages: state => state.languages.list,
    }),
  },
  methods: {
    merge (data) {
      this.$store.commit(this.entity + '/merge', data)
    },
  },
}
</script>

<style scoped>

</style>
