<template>
  <v-dialog v-model="show" max-width="1200px">
    <v-card class="p-4">
      <PackList />
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import PackList from '@/components/pack/PackList'

export default {
  components: {
    PackList,
  },
  props: {
    value: Boolean,
  },
  computed: {
    ...mapState({
      packs: state => state.packs.list,
    }),
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
