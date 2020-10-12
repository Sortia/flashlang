<template>
  <v-row>
    <v-col lg="4">
      <v-card class="rounded-lg border-0" elevation="10">
        <v-img
          height="160"
          style="border-bottom-left-radius: 0; border-bottom-right-radius: 0"
          src="https://author.today//dist/images/default-bg.jpg"
        >
          <v-col class="py-0 align-bottom">
            <v-list-item
              class="pt-3"
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content style="padding-top: 100px;">
                <v-list-item-title class="title">
                  {{ user.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-img>
        <v-col lg="12">
          <v-row>
            <v-col lg="6">
              <div class="pl-2 v-sheet">
                <div class="transition-swing text-subtitle-2 overline">
                  Email
                </div>
                <div class="transition-swing text-caption text-secondary">
                  {{ user.email }}
                </div>
              </div>
            </v-col>
            <v-col lg="6">
              <div class="pl-2 v-sheet">
                <div class="transition-swing text-subtitle-2 overline">
                  Registration date
                </div>
                <div class="transition-swing text-caption text-secondary">
                  {{ user.created_at | date }}
                </div>
              </div>
            </v-col>
          </v-row>
          <v-divider />
          <v-row>
            <v-col lg="6">
              <div class="pl-2 v-sheet">
                <div class="transition-swing text-subtitle-2 overline">
                  Additional
                </div>
                <div class="transition-swing text-caption text-secondary">
                  No information
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </v-col>
    <v-col lg="8">
      <v-card class="pt-4 rounded-lg" elevation="10">
        <v-row no-gutters>
          <v-col md="3">
            <p class="text-center mb-2">
              <span class="h4 text--secondary font-weight-regular">{{ user.study_flashcards_count }}</span>
              <br>
              <span class="text--disabled overline">On study</span>
            </p>
          </v-col>
          <v-col md="3">
            <p class="text-center mb-2">
              <span class="h4 text--secondary font-weight-bold">{{ user.studied_flashcards_count }}</span>
              <br>
              <span class="text--disabled overline">Studied</span>
            </p>
          </v-col>
          <v-col md="3">
            <p class="text-center mb-2">
              <span class="h4 text--secondary font-weight-bold">{{ user.studied_in_this_week_flashcards_count }}</span>
              <br>
              <span class="text--disabled overline">In this week</span>
            </p>
          </v-col>
          <v-col md="3">
            <p class="text-center mb-2">
              <span class="h4 text--secondary font-weight-bold">{{ user.studied_in_this_month_flashcards_count }}</span>
              <br>
              <span class="text--disabled overline">In this month</span>
            </p>
          </v-col>
        </v-row>
        <v-divider />
        <v-row class="px-3">
          <v-col lg="6" class="px-4 py-3">
            <span class="text--disabled overline">Weekly progress</span>
            <v-progress-linear
              color="teal"
              class="pb-3"
              :value="weeklyProgress"
            />
          </v-col>
          <v-col lg="6" class="px-4 py-3">
            <span class="text--disabled overline">Monthly progress</span>
            <v-progress-linear
              color="teal"
              class="pb-3"
              :value="monthlyProgress"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',
  computed: {
    ...mapState({
      user: state => state.users.user,
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
  mounted () {
    this.$store.dispatch('users/show', { id: 1 })
  },
  methods: {
    getCountDaysInMonth () {
      const now = new Date()

      return new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    },
  },
}
</script>

<style>
.v-progress-linear__background {
  height: 4px !important;
}
</style>
