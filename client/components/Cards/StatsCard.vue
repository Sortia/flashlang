<template>
  <card class="card-stats">
    <div class="row">
      <div v-if="$slots.header" class="col-5">
        <div class="icon-big text-center">
          <slot name="header" />
        </div>
      </div>
      <div v-if="$slots.content" class="col-7">
        <div class="numbers">
          <slot name="content" />
        </div>
      </div>
    </div>
    <div v-if="$slots.footer" slot="footer" class="stats">
      <slot name="footer" />
    </div>
  </card>
</template>
<script>
import Card from './Card.vue'
export default {
  name: 'StatsCard',
  components: {
    Card,
  },
}

</script>
<style>

</style>
