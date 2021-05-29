<template>
  <div>
    <v-card shaped elevation="5" class="p-5 mb-4 text-center">
      <div v-if="+task.type === 0" v-html="task.content" />
      <div v-if="+task.type === 1">
        <div class="text-center font-weight-bold" style="font-size: 24px; color: #f1982a">
          <span>Выберите правильный ответ.</span>
        </div>
        <div class="text-center font-weight-bold mt-2 mb-3" style="font-size: 24px; color: #f1982a">
          <span>{{ task.name }}</span>
        </div>
        <div class="flex-center task-radios">
          <v-list>
            <v-list-item-group
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item
                v-for="(answer, i) in task.answers.list"
                :key="i"
              >
                <v-list-item-content>
                  <v-divider class="m-0" />
                  <v-list-item-title class="p-4" v-text="answer" />
                  <v-divider class="m-0" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </div>
      <div class="text-center pt-5">
        <v-btn
          class="big-color-btn"
          color="success"
          elevation="10"
          x-large
          @click="check"
        >
          Далее!
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Id',
  data () {
    return {
      radios: null,
      items: [
        {
          text: 'Brunch this weekend?',
        },
        {
          text: 'Summer BBQ',
        },
      ],
      selectedItem: null,
    }
  },
  computed: {
    ...mapState({
      task: state => state.tasks.task,
      lesson: state => state.lessons.lesson,
    }),
  },
  mounted () {
    this.$store.dispatch('tasks/show', this.$route.params)
  },
  methods: {
    check () {
      console.log(this.lesson)
      if (+this.task.type === 0 || this.selectedItem === this.task.answers.right) {
        this.$store.dispatch('lessons/show', { id: this.task.lesson_id })

        const nextTaskId = this.lesson.tasks.find(task => task.order_number === (this.task.order_number + 1))

        if (nextTaskId)
          this.$router.push('/tasks/' + nextTaskId.id)
        else {
          this.$axios.post('/api/lessons/' + this.lesson.id + '/finish')
          this.$router.push('/courses/' + this.lesson.course_id)
        }
      } else
        document.querySelectorAll('.v-list-item')[this.selectedItem].classList.add('error-answer')
    },
  },
}
</script>

<style scoped>
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style>
.task-radios .error-answer {
  background-color: rgba(245, 76, 42, 0.3);
  color: #e33614;
}

</style>
