<template>
  <div>
    <v-card elevation="10" shaped class="px-5 pb-2">
      <v-row>
        <v-col sm="6" cols="12" class="pb-2">
          <v-text-field
            :value="course.name"
            label="Название"
            :rules="rules.name"
            auto
            autocomplete="false"
            @blur="update"
            @input="merge({ name: $event })"
          />
        </v-col>
        <v-col sm="6" cols="12" class="pb-2">
          <v-text-field
            :value="course.description"
            label="Описание"
            autocomplete="false"
            :rules="rules.description"
            @blur="update"
            @input="merge({ description: $event })"
          />
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5" elevation="10" shaped>
      <div class="col-12">
        <div class="mt-0 mb-1" style="font-size: 26px; font-weight: 300;">
          Модули курса
          <v-btn
            class="float-right"
            color="success"
            elevation="2"
            small
            @click="dialog = true"
          >
            Добавить
          </v-btn>
        </div>

        <draggable
          :v-model="list"
          class="list-group"
          ghost-class="ghost"
          :options="{group:{name:'list',pull:true,put:true},animation: 150}"
          @sort="move"
        >
          <div
            v-for="item in list"
            :key="item.name"
            class="list-group-item"
          >
            <span class="middle">
              <span style="font-size: 18px;">
                {{ item.order_number + 1 }}.
                {{ item.name }}
              </span>
              <span>- {{ item.description }}</span>
            </span>
            <span class="float-right lesson-manage-icon-list">
              <nuxt-link :to="`/manage/lessons/${item.id}`">
                <v-btn class="mx-1" icon><v-icon>mdi-eye</v-icon></v-btn>
              </nuxt-link>
              <v-btn class="mx-1" icon @click="edit(item)"><v-icon>mdi-lead-pencil</v-icon></v-btn>
              <v-btn class="mx-1" icon @click="destroy(item)"><v-icon>mdi-trash-can</v-icon></v-btn>
            </span>
          </div>
        </draggable>
      </div>
    </v-card>
    <v-dialog
      v-model="dialog"
      max-width="1000"
    >
      <v-card>
        <v-card-title class="headline">
          Модуль
        </v-card-title>

        <v-card-text class="pb-0">
          <v-form
            ref="lesson_form"
            v-model="valid"
          >
            <v-row>
              <v-col sm="6" cols="12" class="pb-2">
                <v-text-field
                  v-model="lesson.name"
                  label="Название"
                  :rules="rules.name"
                  auto
                  autocomplete="false"
                />
              </v-col>
              <v-col sm="6" cols="12" class="pb-2">
                <v-text-field
                  v-model="lesson.description"
                  label="Описание"
                  autocomplete="false"
                  :rules="rules.description"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="create"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Id',
  data () {
    return {
      valid: true,
      dialog: false,
      lesson: {
        name: '',
        description: '',
        order_number: '',
        course_id: null,
      },
      rules: {
        name: [
          value => !!value || 'Поле "Название" обязательно для заполнения!',
          value => (value && value.length <= 50) || 'Название должно быть не длиннее 50 символов!',
        ],
        description: [
          value => (!value || value.length <= 50) || 'Описание должно быть не длиннее 50 символов!',
        ],
      },
    }
  },
  computed: {
    ...mapState({
      course: state => state.courses.course,
    }),
    list: {
      get () {
        return this.$store.getters['courses/list']
      },
    },
  },
  mounted () {
    this.$store.dispatch('courses/show', this.$route.params)
  },
  methods: {
    merge (data) {
      this.$store.commit('courses/merge', data)
    },
    update () {
      this.$store.dispatch('courses/update', this.course).then(() => {
        this.$notifier.success()
      })
    },
    create () {
      if (this.$refs.lesson_form.validate()) {
        this.lesson.course_id = this.course.id

        if (this.isCreate())
          if (this.course.lessons.length === 0)
            this.lesson.order_number = 0
          else
            this.lesson.order_number = Math.max(...this.course.lessons.map(lesson => lesson.order_number)) + 1

        this.$store.dispatch('lessons/' + (this.isCreate() ? 'create' : 'update'), this.lesson).then(() => {
          this.$notifier.success()
          this.$store.dispatch('courses/show', this.$route.params)
          this.dialog = false
          this.lesson = {
            name: '',
            description: '',
            order_number: '',
            course_id: null,
          }
        })
      }
    },
    edit (lesson) {
      this.dialog = true
      this.lesson = Object.assign(this.lesson, lesson)
    },
    destroy (lesson) {
      this.$store.dispatch('lessons/destroy', lesson).then(() => {
        this.$store.dispatch('courses/show', this.$route.params)
      })
    },
    move (value) {
      this.$axios.put('/api/lessons/move', { from: value.oldIndex, to: value.newIndex, course_id: this.course.id }).then(() => {
        this.$notifier.success()
        this.$store.dispatch('courses/show', this.$route.params)
      }).catch(() => {
        this.$notifier.error()
      })
    },
    isCreate () {
      return !this.lesson.id
    },
  },
}
</script>

<style scoped>
.middle {
  vertical-align: -webkit-baseline-middle;
}
</style>
