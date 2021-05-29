<template>
  <div>
    <v-card shaped elevation="5" class="px-5 py-3 mb-4">
      <!--   todo   -->
      Тут должна быть подсказка что с этими курсами делать...
    </v-card>
    <v-row>
      <v-col
        v-for="(course) in courses"
        :key="course.id"
        lg="3"
        md="4"
        sm="6"
        cols="12"
        class="mb-5"
      >
        <nuxt-link :to="`/courses/${course.id}`">
          <v-hover
            v-slot:default="{ hover }"
          >
            <v-card
              class="rounded-xl d-flex align-items-start flex-column p-3 pb-1"
              style="min-height: 200px;"
              :elevation="hover ? 24 : 10"
              :class="{ 'on-hover': hover }"
            >
              <v-col class="mb-auto p-2 w-100 text-center" style="margin-top: 40px;">
                {{ course.name }}
                <v-card-text class="p-2 w-100 text-center text-muted">
                  {{ course.description }}
                </v-card-text>
              </v-col>
<!--              <v-card-text class="p-2 w-100">-->
<!--                <v-progress-linear rounded :value="0" color="green" />-->
<!--              </v-card-text>-->
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
  data: () => {
    return {
    }
  },
  computed: {
    ...mapState({
      courses: state => state.courses.list,
    }),
  },
  mounted () {
    this.$store.dispatch('courses/get')
  },
}
</script>

<style scoped>

</style>
