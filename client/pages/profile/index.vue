<template>
  <v-row>
    <v-col lg="3">
      <v-card class="rounded-lg border-0" elevation="10">
        <v-img
          height="160"
          style="border-bottom-left-radius: 0; border-bottom-right-radius: 0"
          src="https://author.today//dist/images/default-bg.jpg"
        >
          <v-col class="py-0 align-bottom">
            <v-list-item
              class="pt-3 pl-"
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content class="d-block">
                <v-btn
                  style="max-width: 40px; float: right; background-color: #8ca3b7 !important;"
                  color="warning"
                  fab
                  small
                  dark
                  @click="editModal = true"
                >
                  <v-icon style="left: 2px">
                    mdi-account-edit-outline
                  </v-icon>
                </v-btn>
                <v-list-item-title class="title overline text-subtitle-2 h2" style="padding-top: 75px;">
                  {{ user.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-img>
        <v-col lg="12">
          <v-row>
            <v-col lg="12">
              <div class="pl-2 v-sheet">
                <div class="transition-swing text-subtitle-2 overline">
                  Электронный адрес
                </div>
                <div class="transition-swing text-caption text-secondary">
                  {{ user.email }}
                </div>
              </div>
            </v-col>
            <v-col lg="12">
              <div class="pl-2 v-sheet">
                <div class="transition-swing text-subtitle-2 overline">
                  Дата регистрации
                </div>
                <div class="transition-swing text-caption text-secondary">
                  {{ user.created_at | date }}
                </div>
              </div>
            </v-col>
          </v-row>
          <v-divider />
          <v-row>
            <v-col lg="12">
              <div class="pl-2 v-sheet">
                <div class="transition-swing text-subtitle-2 overline">
                  Сложность
                  <tooltip text="В зависимости от сложности расчитывается прогресс" />
                </div>
                <div class="transition-swing text-caption text-secondary">
                  {{ user.complexity ? user.complexity.count_flashcards : '' }} карточек в день
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </v-col>
    <v-col lg="9">
      <v-card class="pt-4 rounded-lg" elevation="10">
        <v-row no-gutters>
          <v-col md="3">
            <p class="text-center mb-2">
              <span class="h4 text--secondary font-weight-regular">{{ user.study_flashcards_count }}</span>
              <br>
              <span class="text--disabled overline">На изучении</span>
            </p>
          </v-col>
          <v-col md="3">
            <p class="text-center mb-2">
              <span class="h4 text--secondary font-weight-bold">{{ user.studied_flashcards_count }}</span>
              <br>
              <span class="text--disabled overline">Изучено</span>
            </p>
          </v-col>
          <v-col md="3">
            <p class="text-center mb-2">
              <span class="h4 text--secondary font-weight-bold">{{ user.studied_in_this_week_flashcards_count }}</span>
              <br>
              <span class="text--disabled overline">На этой неделе</span>
            </p>
          </v-col>
          <v-col md="3">
            <p class="text-center mb-2">
              <span class="h4 text--secondary font-weight-bold">{{ user.studied_in_this_month_flashcards_count }}</span>
              <br>
              <span class="text--disabled overline">В этом месяце</span>
            </p>
          </v-col>
        </v-row>
        <v-divider />
        <v-row class="px-3">
          <v-col lg="6" class="px-4 py-3">
            <span class="text--disabled overline">Недельный прогресс</span>
            <v-progress-linear
              color="teal"
              class="pb-3"
              :value="weeklyProgress"
            />
          </v-col>
          <v-col lg="6" class="px-4 py-3">
            <span class="text--disabled overline">Месячный прогресс</span>
            <v-progress-linear
              color="teal"
              class="pb-3"
              :value="monthlyProgress"
            />
          </v-col>
        </v-row>
      </v-card>
      <v-card class="mt-5 rounded-lg" elevation="10">
        <v-card-title class="text-subtitle-2 overline">
          <div class="transition-swing text-subtitle-2 overline">
            Календарь изученных слов
            <tooltip text="Чем больше слов изучено за день - тем более насыщенный цвет" />
          </div>
        </v-card-title>
        <v-divider />
        <div class="container d-flex flex-row-reverse mb-3 pb-5" style="overflow: hidden" />
        <v-divider />
        <v-card-title class="text-subtitle-2 overline">
          <span class="pr-2">Активность за {{ date | date }}:</span>
          <span v-if="day" class="text--disabled">{{ ' ' }} {{ day.flashcards.length }} слов изучено</span>
          <span v-else class="text--disabled">{{ ' ' }} День прошел зря!</span>
        </v-card-title>
        <v-divider />
        <v-row v-if="day">
          <v-col class="py-0">
            <div v-for="flashcard in day.flashcards" :key="flashcard.id">
              <v-card-text style="font-size: 16px;  ">
                <span>
                  {{ flashcard.first_side }}
                </span>
                <span v-if="flashcard.transcription">
                  - {{ flashcard.transcription }}
                </span>
                <span>
                  - {{ flashcard.second_side }}
                </span>
              </v-card-text>
              <v-divider />
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-dialog
      v-model="editModal"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Редактирование профиля</span>
        </v-card-title>
        <v-divider class="m-0" />
        <v-form ref="form" class="m-3">
          <div>
            <v-text-field
              :value="user.name"
              label="Имя"
              :rules="rules.name"
              autocomplete="false"
            />
          </div>
          <div>
            <v-text-field
              :value="user.email"
              label="Электронная почта"
              :rules="rules.email"
              autocomplete="false"
            />
          </div>
          <div>
            <v-text-field
              :value="user.complexity ? user.complexity.count_flashcards : ''"
              label="Сложность"
              autocomplete="false"
            />
          </div>
          <v-row>
            <v-divider />
          </v-row>
          <h5 style="font-size: 18px; font-weight: 400;">
            Смена пароля
          </h5>
          <div>
            <v-text-field
              v-model="login.password"
              label="Текущий пароль"
              type="password"
              :rules="rules.password"
              autocomplete="false"
            />
          </div>
          <div>
            <v-text-field
              v-model="login.password"
              label="Новый пароль"
              type="password"
              :rules="rules.password"
              autocomplete="false"
            />
          </div>
          <div>
            <v-text-field
              v-model="login.confirm"
              label="Подтверждение"
              type="password"
              :rules="rules.confirm"
              autocomplete="false"
            />
          </div>
          <v-card-actions>
            <v-btn
              color="green darken-1"
              text
            >
              Сохранить
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="editModal = false"
            >
              Отмена
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

import Tooltip from '@/components/elements/tooltip'

export default {
  name: 'Index',
  components: {
    Tooltip,
  },
  data () {
    return {
      date: '',
      editModal: false,
      login: {
        name: '',
        email: '',
        password: '',
        confirm: '',
      },
      rules: {
        name: [
          value => !!value || 'Поле обязательно для заполнения',
          value => (value && value.length <= 25) || 'Поле должно быть не длиннее 25 символов',
        ],
        email: [
          v => !!v || 'Пожалуйста введите электронную почту!',
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Электронная почта введена не верно!',
        ],
        password: [
          value => !!value || 'Пожалуйста введите пароль!',
          value => (value && value.length >= 6) || 'Минимум 6 символов!',
        ],
        confirm: [
          value => !!value || 'Подтвердите пароль!',
          value => value === this.login.password || 'Пароли не совпадают!',
        ],
      },
    }
  },
  computed: {
    ...mapState({
      user: state => state.users.user,
      heatmap: state => state.heatmaps.list,
      day: state => state.heatmaps.selected,
    }),
    weeklyProgress () {
      if (!this.user.complexity) return 0

      return (this.user.studied_in_this_week_flashcards_count / (this.user.complexity.count_flashcards * 7)) * 100
    },
    monthlyProgress () {
      if (!this.user.complexity) return 0

      return (this.user.studied_in_this_month_flashcards_count / (this.user.complexity.count_flashcards * this.getCountDaysInMonth())) * 100
    },
  },
  watch: {
    heatmap (heatmap) {
      this.setHeatmap(heatmap)
      this.setHeatmapDay(new Date())
    },
  },
  async asyncData ({ store }) {
    await store.dispatch('users/show', { id: store.state.auth.user.id })
    await store.dispatch('heatmaps/get', { user_id: store.state.auth.user.id })
  },
  methods: {
    getCountDaysInMonth () {
      const now = new Date()

      return new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    },
    setHeatmap (data) {
      const chartData = data.map((item) => {
        return {
          date: moment(item.date, 'YYYY-MM-DD').toDate(),
          count: item.flashcards.length,
          id: item.id,
        }
      })

      const heatmap = this.$heatmap.create()
        .data(chartData)
        .selector('.container')
        .tooltipEnabled(true)
        .colorRange([ '#f4f7f7', '#79a8a9' ])
        .onClick((date) => {
          this.setHeatmapDay(date)
        })
      heatmap() // render the chart
    },
    setHeatmapDay (date) {
      this.date = date
      const day = this.heatmap.find(item => item.date === moment(date).format('YYYY-MM-DD'))

      return this.$store.commit('heatmaps/select', day || null)
    },
  },
}
</script>

<style>
.v-progress-linear__background {
  height: 4px !important;
}

.v-card {
  border: none;
}

.container svg {
  overflow: initial;
}

text.month-name,
text.calendar-heatmap-legend-text,
text.day-initial {
  font-size: 10px;
  /*fill: inherit;*/
  font-family: Helvetica, arial, 'Open Sans', sans-serif;
}
rect.day-cell {
  padding: 5px;
  shape-rendering: geometricPrecision;
  outline: 1px solid rgba(27,31,35,.04);
  outline-offset: -1px;
  rx: 2;
  ry: 2;
}
rect.day-cell:hover {
stroke: #555555;
stroke-width: 1px;
}
.day-cell-tooltip {
position: fixed;
z-index: 9999;
padding: 5px 9px;
color: #bbbbbb;
font-size: 12px;
background: rgba(0, 0, 0, 0.85);
border-radius: 3px;
text-align: center;
}
.day-cell-tooltip > span {
font-family: Helvetica, arial, 'Open Sans', sans-serif
}
.calendar-heatmap {
box-sizing: initial;
padding: 15px 0;
}

</style>

<style scoped>
.profile-edit {
  font-size: 30px;
  color: #efe6e6;
  text-align: right;
  margin-top: -10px;
}
</style>
