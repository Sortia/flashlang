<template>
  <v-select
    :items="items"
    :value="value"
    :clearable="clearable"
    :label="label"
    :item-text="itemText"
    :item-value="itemValue"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Number,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    itemText: {
      type: String,
      default: 'name',
    },
    itemValue: {
      type: String,
      default: 'id',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>

</style>
