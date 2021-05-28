<template>
  <div>
    <v-card elevation="5" shaped class="px-5 py-3 mb-4">
      <!--   todo   -->
      Тут должна быть подсказка что с этими модулями делать...
    </v-card>
    <v-card class="mt-5" elevation="10" shaped>
      <div class="col-12">
        <div class="mt-0 mb-1" style="font-size: 26px; font-weight: 300;">
          Элементы модуля
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
        <v-dialog
          v-model="dialog"
          max-width="1000"
        >
          <v-card>
            <v-card-title class="headline">
              Элемент модуля
            </v-card-title>

            <v-card-text class="pb-0">
              <v-form
                ref="item_form"
                v-model="valid"
              >
                <v-row>
                  <lesson-item />
                </v-row>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="success"
                class="mb-2"
                @click="create"
              >
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <draggable
          :v-model="pages"
          class="list-group"
          ghost-class="ghost"
          :options="{group:{name:'pages',pull:true,put:true},animation: 150}"
          @sort="move"
        >
          <div
            v-for="item in pages"
            :key="item.name"
            class="list-group-item"
          >
            <span style="font-size: 18px; vertical-align: -webkit-baseline-middle;">
              {{ item.order_number + 1 }}.
              {{ item.name }}
            </span>
            <span class="float-right lesson-manage-icon-list">
              <v-btn class="mx-1" icon @click="edit(item)"><v-icon>mdi-lead-pencil</v-icon></v-btn>
              <v-btn class="mx-1" icon @click="destroy(item)"><v-icon>mdi-trash-can</v-icon></v-btn>
            </span>
          </div>
        </draggable>
      </div>
    </v-card>
    <!--    <lesson-item />-->
  </div>
</template>

<script>
import LessonItem from '@/components/manage/lesson/item'
import { mapState } from 'vuex'

export default {
  name: 'Id',
  components: {
    LessonItem,
  },
  data () {
    return {
      valid: true,
      dialog: false,
      rules: {
        name: [
          value => !!value || 'Поле "Название" обязательно для заполнения!',
          value => (value && value.length <= 50) || 'Название должно быть не длиннее 50 символов!',
        ],
      },
    }
  },
  computed: {
    ...mapState({
      lesson: state => state.lessons.lesson,
      lesson_item: state => state.lesson_items.lesson_item,
    }),
    pages: {
      get () {
        return this.$store.getters['lessons/list']
      },
    },
  },
  mounted () {
    this.$store.dispatch('lessons/show', this.$route.params)
  },
  methods: {
    create () {
      if (this.$refs.item_form.validate()) {
        this.lesson_item.lesson_id = this.lesson.id
        this.$store.commit('lesson_items/merge', { lesson_id: this.lesson.id })

        if (this.isCreate())
          if (this.lesson.items.length === 0)
            this.$store.commit('lesson_items/merge', { order_number: 0 })
          else
            this.$store.commit('lesson_items/merge', { order_number: Math.max(...this.lesson.items.map(item => item.order_number)) + 1 })

        this.$store.dispatch('lesson_items/' + (this.isCreate() ? 'create' : 'update'), this.lesson_item).then(() => {
          this.$notifier.success()
          this.$store.dispatch('lessons/show', this.$route.params)
          this.dialog = false
        })
      }
    },
    edit (lesson_item) {
      this.$store.commit('lesson_items/setLessonItem', lesson_item)
      this.dialog = true
    },
    destroy (lesson_item) {
      this.$store.dispatch('lesson_items/destroy', lesson_item).then(() => {
        this.$store.dispatch('lessons/show', this.$route.params)
      })
    },
    move () {

    },
    isCreate () {
      return !this.lesson_item.id
    },
  },
}
</script>
