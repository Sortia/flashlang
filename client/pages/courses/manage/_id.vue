<template>
  <div>
    <v-card elevation="10" shaped class="px-5 pb-2">
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

        <div class="col-6">
          <h3>Draggable {{ draggingInfo }}</h3>

          <draggable
            :list="list"
            :disabled="!enabled"
            class="list-group"
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
          >
            <div
              v-for="element in list"
              :key="element.name"
              class="list-group-item"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Id',
  data () {
    return {
      enabled: true,
      list: [
        { name: 'John', id: 0 },
        { name: 'Joao', id: 1 },
        { name: 'Jean', id: 2 },
      ],
      dragging: false,
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
      course: state => state.courses.course,
    }),
    draggingInfo () {
      return this.dragging ? 'under drag' : ''
    },
  },
  mounted () {
    this.$store.dispatch('courses/show', this.$route.params)
  },
  methods: {
    merge () {

    },
    onUpdate (event) {
      this.list.splice(event.newIndex, 0, this.list.splice(event.oldIndex, 1)[0])
    },
    checkMove (e) {
      window.console.log('Future index: ' + e.draggedContext.futureIndex)
    },
  },
}
</script>

<style scoped>

</style>
