<template>
  <div>
    <v-card shaped elevation="5" class="px-5 py-3 mb-4 text-center">
      <div>
        <span style="font-size: 26px">{{ course.name }} - {{ course.description }}</span>
      </div>
      <div>
        <v-btn
          class="big-color-btn my-5"
          color="success"
          elevation="10"
          x-large
          @click="redirect(getStartLesson())"
        >
          {{ getButtonTitle() }}
        </v-btn>
      </div>
    </v-card>
    <v-card shaped elevation="10" class="px-5 py-3 mb-4 text-center">
      <v-timeline :reverse="true">
        <v-timeline-item v-for="lesson in course.lessons" :key="lesson.id" :color="getPointColor(lesson)">
          <span slot="opposite">
            <span class="cursor-pointer" style="color: #585fb5" @click="redirect(lesson)">
              {{ lesson.name }}
            </span>
          </span>
          <v-card class="elevation-4">
            <span class="cursor-pointer" @click="redirect(lesson)">
              <v-card-text>
                {{ lesson.description }}
              </v-card-text>
            </span>
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
      user: state => state.users.user,
    }),
  },
  mounted () {
    this.$store.dispatch('courses/show', this.$route.params)
    this.$store.dispatch('users/show', this.$auth.user)
  },
  methods: {
    redirect (lesson) {
      this.$axios.post('/api/courses/' + this.course.id + '/start')
      // this.$axios.post('/api/lessons/' + lesson.id + '/start')
      this.$router.push('/lessons/' + lesson.id)
    },
    getButtonTitle () {
      if (!this.user.courses)
        return 'Начать курс'

      return this.user.courses.find(user_course => user_course.id === this.course.id) ? 'Продолжить курс' : 'Начать курс'
    },
    getPointColor (lesson) {
      if (!this.user.lessons)
        return 'grey lighten-2'

      return this.user.lessons.find(user_lesson => user_lesson.id === lesson.id) ? 'blue' : 'grey lighten-2'
    },
    getStartLesson () {
      if (!this.user.lessons.length)
        return this.course.lessons[0]

      const finishedLesson = this.user.lessons[this.user.lessons.length - 1]
      const nextLesson = this.course.lessons.find(lesson => lesson.order_number === finishedLesson.order_number + 1)

      if (nextLesson)
        return nextLesson
      else
        return finishedLesson
    },
  },
}
</script>

<style scoped>

</style>
