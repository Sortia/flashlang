<template>
  <CollectionForm />
</template>

<script>
import CollectionForm from '@/components/collection/CollectionForm'

export default {
  name: 'Create',
  components: {
    CollectionForm,
  },
  mounted () {
    this.$store.dispatch('collections/show', this.$route.params)
  },
}
</script>
