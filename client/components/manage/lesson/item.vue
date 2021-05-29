<template>
  <div class="w-100">
    <v-row class="pt-3">
      <v-col class="text-center">
        <v-btn-toggle
          :value="+task.type"
          rounded
          @change="changeType"
        >
          <v-btn>
            <span class="type-text">Теория</span>
          </v-btn>
          <v-btn>
            <span class="type-text">Тест</span>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row v-if="task.type !== undefined">
      <v-col lg="12">
        <v-text-field
          :value="task.name"
          :label="task.type === 0 ? 'Название' : (task.type === 1 ? 'Вопрос' : '')"
          :rules="rules.name"
          auto
          autocomplete="false"
          @input="merge({ name: $event })"
        />
      </v-col>
    </v-row>
    <v-row v-if="+task.type === 0">
      <v-col lg="12">
        <h4 class="mt-0">
          Текст:
        </h4>
        <VueEditor v-model="content" placeholder="Write Something..." @text-change="merge({ content: content })" />
      </v-col>
    </v-row>
    <v-row v-if="+task.type === 1">
      <v-col lg="12">
        <h4 class="my-0">
          Варианты ответов:
        </h4>
        <v-row>
          <v-col lg="6">
            <v-text-field
              :value="getAnswer(0)"
              label="Ответ #1"
              :rules="rules.required_answer"
              auto
              autocomplete="false"
              @input="mergeAnswer($event, 0)"
            />
          </v-col>
          <v-col lg="6">
            <v-text-field
              :value="getAnswer(1)"
              label="Ответ #2"
              :rules="rules.required_answer"
              auto
              autocomplete="false"
              @input="mergeAnswer($event, 1)"
            />
          </v-col>
          <v-col lg="6">
            <v-text-field
              :value="getAnswer(2)"
              label="Ответ #3"
              :rules="rules.answer"
              auto
              autocomplete="false"
              @input="mergeAnswer($event, 2)"
            />
          </v-col>
          <v-col lg="6">
            <v-text-field
              :value="getAnswer(3)"
              label="Ответ #4"
              :rules="rules.answer"
              auto
              autocomplete="false"
              @input="mergeAnswer($event, 3)"
            />
          </v-col>
          <v-col lg="12">
            <v-select
              :value="task.answers ? task.answers.right : null"
              :items="answerSelectItems"
              label="Правильный ответ"
              @change="mergeRight"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapState } from 'vuex'

export default {
  name: 'Item',
  components: { VueEditor },
  data () {
    return {
      content: '',
      answerSelectItems: [
        {
          text: 'Ответ #1',
          value: 1,
        },
        {
          text: 'Ответ #2',
          value: 2,
        },
        {
          text: 'Ответ #3',
          value: 3,
        },
        {
          text: 'Ответ #4',
          value: 4,
        },
      ],
      rules: {
        name: [
          value => !!value || 'Поле обязательно для заполнения!',
          value => (value && value.length <= 50) || 'Поле должно быть не длиннее 50 символов!',
        ],
        answer: [
        ],
        required_answer: [
          value => !!value || 'Поле обязательно для заполнения!',
        ],
      },
    }
  },
  computed: {
    ...mapState({
      task: state => state.tasks.task,
    }),
  },
  watch: {
    task (val) {
      this.content = val.content
    },
  },
  methods: {
    merge (data) {
      this.$store.commit('tasks/merge', data)
    },
    mergeAnswer (value, index) {
      this.$store.commit('tasks/mergeAnswer', { value, index })
    },
    mergeRight (value) {
      this.$store.commit('tasks/mergeRight', { value })
    },
    getAnswer (index) {
      if (this.task.answers && this.task.answers.list)
        return this.task.answers.list[index]
      else return ''
    },
    changeType (value) {
      this.content = ''
      this.$store.commit('tasks/setTask')
      this.merge({ type: value })
    },
  },
}
</script>

<style scoped>
.type-text {
  min-width: 150px;
}
</style>
