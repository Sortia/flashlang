<template>
  <div>
    <v-card shaped elevation="5" class="px-5 py-3 mb-4 text-center">
      <div>
        <span style="font-size: 26px">{{ course.name }} - {{ course.description }}</span>
      </div>
      <div>
        <nuxt-link :to="`/lessons/${course.lessons[0].id}`">
          <v-btn
            class="big-color-btn my-5"
            color="success"
            elevation="10"
            x-large
          >
            Начать курс
          </v-btn>
        </nuxt-link>
      </div>
    </v-card>
    <v-card shaped elevation="10" class="px-5 py-3 mb-4 text-center">
      <v-timeline :reverse="true">
        <v-timeline-item v-for="lesson in course.lessons" :key="lesson.id" color="grey lighten-2">
          <span slot="opposite">
            <nuxt-link :to="`/lessons/${lesson.id}`">
              {{ lesson.name }}
            </nuxt-link>
          </span>
          <v-card class="elevation-4">
            <nuxt-link :to="`/lessons/${lesson.id}`" style="color: #524444">
              <v-card-text>
                {{ lesson.description }}
              </v-card-text>
            </nuxt-link>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Id',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      course: state => state.courses.course,
    }),
  },
  mounted () {
    this.$store.dispatch('courses/show', this.$route.params)
  },
}
</script>

<style scoped>

</style>
