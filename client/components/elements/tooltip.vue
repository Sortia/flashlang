<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        class="tooltip-icon"
        small
        v-bind="attrs"
        v-on="on"
      >
        mdi-information-outline
      </v-icon>
    </template>
    <span>{{ text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.tooltip-icon {
  vertical-align: top;
}
</style>
