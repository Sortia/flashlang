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
    this.setDefaultFlashcards()
  },
  methods: {
    setDefaultFlashcards () {
      for (let i = 0; i < 6; i++)
        this.$store.commit('packs/newFlashcard')
    },
  },
}
</script>
