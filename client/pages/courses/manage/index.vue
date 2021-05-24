<template>
  <div>
    <v-card elevation="5" class="course-tip px-5 py-3 mb-4">
      <!--   todo   -->
      Тут должна быть подсказка что с этими курсами делать...
    </v-card>
    <v-row>
      <v-col
        lg="3"
        md="4"
        sm="6"
        cols="12"
        class="mb-5"
        @click.stop="dialog = true"
      >
        <button class="w-100">
          <v-hover
            v-slot:default="{ hover }"
          >
            <v-card
              class="rounded-xl d-flex align-items-start flex-column p-3 pb-1"
              style="min-height: 200px;"
              :elevation="hover ? 24 : 10"
              :class="{ 'on-hover': hover }"
            >
              <v-container fill-height style="margin-top: 50px">
                <v-row class="justify-center align-center">
                  <v-icon large>
                    mdi-puzzle-plus
                  </v-icon>
                  <span class="pl-4">Добавить</span>
                </v-row>
              </v-container>
            </v-card>
          </v-hover>
        </button>
      </v-col>
      <v-dialog
        v-model="dialog"
        max-width="1000"
      >
        <v-card>
          <v-card-title class="headline">
            Добавить новую коллекцию
          </v-card-title>

          <v-card-text class="pb-0">
            <v-form
              ref="course_form"
              v-model="valid"
            >
              <v-row>
                <v-col sm="6" cols="12" class="pb-2">
                  <v-text-field
                    :value="course.name"
                    label="Название"
                    :rules="rules.name"
                    auto
                    autocomplete="false"
                    @blur="$emit('update')"
                    @input="merge({ name: $event })"
                  />
                </v-col>
                <v-col sm="6" cols="12" class="pb-2">
                  <v-text-field
                    :value="course.description"
                    label="Описание"
                    autocomplete="false"
                    :rules="rules.description"
                    @blur="$emit('update')"
                    @input="merge({ description: $event })"
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
      <v-col
        v-for="(course) in courses"
        :key="course.id"
        lg="3"
        md="4"
        sm="6"
        cols="12"
        class="mb-5"
      >
        <nuxt-link :to="`/courses/manage/${course.id}`">
          <v-hover
            v-slot:default="{ hover }"
          >
            <v-card
              class="rounded-xl d-flex align-items-start flex-column p-3 pb-1"
              style="min-height: 200px;"
              :elevation="hover ? 24 : 10"
              :class="{ 'on-hover': hover }"
            >
              <v-card-text class="pt-0 pr-2 text-left w-100 text-muted">
                <small class="text-left">{{ course.created_at | date }}</small>
                <small class="float-right">
                  <i slot="extra" class="icon mdi mdi-close-circle course-delete" @click.prevent="destroy(course)" />
                </small>
              </v-card-text>
              <v-col class="mb-auto mt-4 p-2 w-100 text-center">
                {{ course.name }}
                <v-card-text class="p-2 w-100 text-center text-muted">
                  {{ course.description }}
                </v-card-text>
              </v-col>
            </v-card>
          </v-hover>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
      valid: true,
      dialog: false,
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
      courses: state => state.courses.list,
      course: state => state.courses.course,
    }),
  },
  mounted () {
    this.$store.dispatch('courses/get')
  },
  methods: {
    create () {
      console.log(this.course)
      if (this.$refs.course_form.validate())
        this.$store.dispatch('courses/create', this.course).then((res) => {
          this.$notifier.success()
          this.$router.push('/courses/manage/' + res.data.id)
        })
    },
    destroy () {

    },
    merge (data) {
      console.log(data)
      this.$store.commit('courses/merge', data)
    },
  },
}
</script>

<style scoped>
  .course-tip {
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  }

  .course-delete {
    font-size: 14px;
  }
</style>
