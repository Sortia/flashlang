<template>
  <v-row>
    <v-col md="6">
      <v-card shaped elevation="20" class="p-4 flashcard-card">
        <v-card-title class="p-0">
          <h3 class="pa-2 m-0 p-0">
            <strong>Флеш-карточки</strong>
          </h3>
        </v-card-title>
        <v-card-text class="pa-2">
          Каждая карточка содержит вопрос с одной стороны и ответ - с другой.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <nuxt-link to="/trainings/flashcards">
            <v-btn class="mt-5 float-right px-5" dark rounded>
              Начать
            </v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col md="6">
      <v-card shaped elevation="20" class="p-4 choose-card">
        <v-card-title class="p-0">
          <h3 class="pa-2 m-0 p-0">
            <strong>Выбор</strong>
          </h3>
        </v-card-title>
        <v-card-text class="pa-2">
          Выберите один из предложенных вариантов перевода слова.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <nuxt-link to="/trainings/choose">
            <v-btn class="mt-5 float-right px-5" dark rounded>
              Начать
            </v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col md="6">
      <v-card shaped elevation="20" class="p-4 constructor-card">
        <v-card-title class="p-0">
          <h3 class="pa-2 m-0 p-0">
            <strong>Конструктор</strong>
          </h3>
        </v-card-title>
        <v-card-text class="pa-2">
          Соберите правильный перевод из предложенных букв.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <nuxt-link to="/trainings/constructor">
            <v-btn class="mt-5 float-right px-5" dark rounded>
              Начать
            </v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col md="6">
      <v-card shaped elevation="20" class="p-4 writing-card">
        <v-card-title class="p-0">
          <h3 class="pa-2 m-0 p-0">
            <strong>Письмо</strong>
          </h3>
        </v-card-title>
        <v-card-text class="pa-2">
          Напишите перевод предложенного слова.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <nuxt-link to="/trainings/writing">
            <v-btn class="mt-5 float-right px-5" dark rounded>
              Начать
            </v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col md="6">
      <v-card shaped elevation="20" class="p-4 reading-card">
        <v-card-title class="p-0">
          <h3 class="pa-2 m-0 p-0">
            <strong>Чтение</strong>
          </h3>
        </v-card-title>
        <v-card-text class="pa-2">
          Специально подобранные предложения с изученными словами.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <nuxt-link to="/trainings/reading">
            <v-btn class="mt-5 float-right px-5" dark rounded>
              Начать
            </v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col md="6">
      <v-card shaped elevation="20" class="p-4 sprint-card">
        <v-card-title class="p-0">
          <h3 class="pa-2 m-0 p-0">
            <strong>Спринт</strong>
          </h3>
        </v-card-title>
        <v-card-text class="pa-2">
          // TODO
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <nuxt-link to="/trainings/sprint">
            <v-btn class="mt-5 float-right px-5" dark rounded>
              Начать
            </v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
      showScheduleForm: false,
    }
  },
  computed: {
    ...mapState({
      packs: state => state.packs.list,
    }),
  },
  mounted () {
    this.$store.dispatch('packs/get')
  },
}

</script>

<style scoped>
  .v-card {
    color: white;
    border: none;
  }

  .v-card__text  {
    color: white !important;
    font-weight: 500;
  }

  .flashcard-card {
    background-image: linear-gradient(135deg, #f5e273 0%, #e371db 40%, #b4eabb 82%, #8494e7 130%);
  }

  .choose-card {
    background-image: linear-gradient(135deg, #b4eabb 2%, #8494e7 35%, #f2aef2 62%, #f5e273 100%);
  }

  .constructor-card {
    background-image: linear-gradient(135deg, #f5e273 -10%, #e371db 17%, #b4eabb 58%, #8494e7 95%);
  }

  .writing-card {
    background-image: linear-gradient(135deg, #b4eabb -10%, #8494e7 10%, #f2aef2 38%, #f5e273 80%, #e371db 120%);
  }

  .reading-card {
    background-image: linear-gradient(135deg, #e371db 0%, #b4eabb 34%, #8494e7 70%, #f2aef2 99%);
  }

  .sprint-card {
    background-image: linear-gradient(135deg, #8494e7 -10%, #f2aef2 15%, #f5e273 57%, #e371db 125%);
  }

</style>
