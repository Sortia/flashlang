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
    this.setDefaultFlashcards()
  },
  methods: {
    setDefaultFlashcards () {
      for (let i = 0; i < 8; i++)
        this.$store.commit('collections/newFlashcard')
    },
  },
}
</script>
