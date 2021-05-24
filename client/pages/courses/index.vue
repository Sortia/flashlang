<template>
  <div style="background-color: #fff;">
    <VueEditor v-model="content" placeholder="Write Something..." />
    <v-btn class="mt-5 float-right px-5" dark rounded @click="test">
      Начать
    </v-btn>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'Index',
  components: { VueEditor },
  data: () => {
    return {
      content: '',
    }
  },
  methods: {
    test () {
      console.log(this.content)
    },
  },
}
</script>

<style scoped>

</style>
