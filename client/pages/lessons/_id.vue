<template>
  <div>
    <v-card shaped elevation="5" class="p-5 mb-4 text-center" style="">
      <div class="text-center pb-5 pt-2">
        <span class="lesson-number">Урок {{ lesson.order_number + 1 }}</span>
      </div>
      <div class="text-center pb-3">
        <span style="font-size: 24px;">{{ lesson.name }}</span>
      </div>
      <div class="text-center pb-5">
        <v-card-text>{{ lesson.description }}</v-card-text>
      </div>
      <div class="text-center" style="margin: 60px 0">
        <v-stepper alt-labels>
          <v-stepper-header outlined>
            <template v-for="(task, index) in lesson.tasks">
              <v-stepper-step
                :key="`${index}-step`"
                class="cursor-pointer"
                :step="index + 1"
                @click="$router.push('/tasks/' + task.id)"
              >
                {{ task.name }}
              </v-stepper-step>

              <v-divider
                v-if="index !== lesson.tasks.length - 1"
                :key="index"
              />
            </template>
          </v-stepper-header>
        </v-stepper>
      </div>

      <div class="text-center pt-5">
        <nuxt-link :to="link">
          <v-btn
            class="big-color-btn"
            color="success"
            elevation="10"
            x-large
          >
            Начать!
          </v-btn>
        </nuxt-link>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Id',
  computed: {
    ...mapState({
      lesson: state => state.lessons.lesson,
    }),
    link () {
      return this.lesson.tasks ? '/tasks/' + this.lesson.tasks[0].id : '#'
    },
  },
  mounted () {
    this.$store.dispatch('lessons/show', this.$route.params)
  },
}
</script>

<style>
.lesson-number {
  font-size: 26px;
  color: #787b82;
}
</style>
