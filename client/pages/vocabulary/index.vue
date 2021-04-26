<template>
  <div>
    <v-card elevation="5" shaped class="pack-tip px-5 py-3 mb-4">
      <!--   todo   -->
      Тут должно быть описание что это такое...
    </v-card>
    <!--    <v-card elevation="5" class="px-5 py-3 mb-4">-->
    <v-data-table
      :headers="headers"
      :items="list"
      class="elevation-5"
      :options.sync="options"
      :items-per-page="15"
      :loading="loading"
      :server-items-length="totalDesserts"
    >
      <template v-slot:header.status_id="{ header }">
        <span style="padding-left: 35px;">{{ header.text }}</span>
      </template>
      <template v-slot:item.created_at="{ item }">
        {{ item | date }}
      </template>
      <template v-slot:item.first_side="{ item }">
        <nuxt-link :to="`/packs/${item.pack_id}`" style="font-weight: 500;">
          {{ item.first_side }}
        </nuxt-link>
      </template>
      <template v-slot:item.status_id="{ item }">
        <v-rating
          color="warning"
          hover
          background-color="grey"
          length="5"
          size="23"
          :value="item.status_id"
          @input="update(item, $event)"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      options: {},
      totalDesserts: 0,
      loading: true,
      headers: [
        {
          text: 'Слово',
          value: 'first_side',
        },
        {
          text: 'Транскрипция',
          value: 'transcription',
        },
        {
          text: 'Перевод',
          value: 'second_side',
        },
        {
          text: 'Статус',
          value: 'status_id',
        },
        {
          text: 'Дата добавления',
          value: 'created_at',
        },
      ],
      list: [],
    }
  },
  watch: {
    options: {
      handler () {
        this.getDataFromApi()
      },
      deep: true,
    },
  },
  methods: {
    update (flashcard, status_id) {
      this.$axios.put(`/api/flashcards/${flashcard.id}`, { status_id }).then(() => {
        this.$notifier.success()
      })
    },
    getDataFromApi () {
      this.loading = true
      this.$axios.get('api/vocabulary', { params: this.options }).then((response) => {
        this.list = response.data.data
        this.totalDesserts = response.data.total
        this.loading = false
      })
    },
  },
}
</script>

<style scoped>

</style>
