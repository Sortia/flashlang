<template>
  <PackList />
</template>

<script>

import PackList from '@/components/pack/PackList'

export default {
  name: 'Index',
  components: {
    PackList,
  },
  mounted () {
    this.$store.dispatch('packs/get')
  },
}
</script>
