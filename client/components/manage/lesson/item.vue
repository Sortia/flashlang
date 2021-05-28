<template>
  <div class="w-100">
    <v-row class="pt-3">
      <v-col class="text-center">
        <v-btn-toggle
          :value="+lesson_item.type"
          rounded
          @change="merge({ type: $event })"
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
    <v-row>
      <v-col lg="12">
        <v-text-field
          :value="lesson_item.name"
          :label="lesson_item.type === 0 ? 'Название' : (lesson_item.type === 1 ? 'Вопрос' : '')"
          :rules="rules.name"
          auto
          autocomplete="false"
          @input="merge({ name: $event })"
        />
      </v-col>
    </v-row>
    <v-row v-if="+lesson_item.type === 0">
      <v-col lg="12">
        <h4 class="mt-0">
          Текст:
        </h4>
        <VueEditor v-model="content" placeholder="Write Something..." @text-change="merge({ content: content })" />
      </v-col>
    </v-row>
    <v-row v-if="+lesson_item.type === 1">
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
              :value="lesson_item.answers ? lesson_item.answers.right : null"
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
      lesson_item: state => state.lesson_items.lesson_item,
    }),
  },
  methods: {
    merge (data) {
      this.$store.commit('lesson_items/merge', data)
    },
    mergeAnswer (value, index) {
      this.$store.commit('lesson_items/mergeAnswer', { value, index })
      console.log(this.lesson_item)
    },
    mergeRight (value) {
      this.$store.commit('lesson_items/mergeRight', { value })
      console.log(this.lesson_item)
    },
    getAnswer (index) {
      if (this.lesson_item.answers && this.lesson_item.answers.list)
        return this.lesson_item.answers.list[index]
      else return ''
    },
  },
}
</script>

<style scoped>
.type-text {
  min-width: 150px;
}
</style>
