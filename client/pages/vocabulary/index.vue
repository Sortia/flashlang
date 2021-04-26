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
      hide-default-footer
      class="elevation-5"
      :single-expand="true"
      show-expand
    >
      <template v-slot:header.status_id="{ header }">
        <span style="padding-left: 35px;">{{ header.text }}</span>
      </template>
      <template v-slot:item.created_at="{ item }">
        {{ item | date }}
      </template>
      <template v-slot:item.first_side="{ item }">
        <nuxt-link :to="`/packs/${item.pack.id}`" style="font-weight: 500;">
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
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-row>
            <v-col lg="4">
              <span class="font-weight-bold">Набор:</span>
              <nuxt-link :to="`/packs/${item.pack.id}`">
                {{ item.pack.name }}
              </nuxt-link>
            </v-col>
            <v-col lg="4">
              <span class="font-weight-bold">Дата добавления:</span>
              {{ item.created_at | date }}
            </v-col>
            <v-col lg="4" />
          </v-row>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
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
          text: '',
          value: 'data-table-expand',
        },
      ],
      list: [],
    }
  },
  mounted () {
    this.$axios.get('api/vocabulary').then((response) => {
      this.list = response.data
    })
  },
  methods: {
    update (flashcard, status_id) {
      this.$axios.put(`/api/flashcards/${flashcard.id}`, { status_id }).then(() => {
        this.$notifier.success()
      })
    },
  },
}
</script>

<style scoped>

</style>
