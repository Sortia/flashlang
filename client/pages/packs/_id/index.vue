<template>
  <PackForm />
</template>

<script>
import PackForm from '@/components/pack/PackForm'

export default {
  name: 'Create',
  components: {
    PackForm,
  },
  mounted () {
    this.$store.dispatch('packs/show', this.$route.params)
  },
}
</script>
