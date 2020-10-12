<template>
  <v-navigation-drawer
    permanent
    right
    width=""
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="selected"
        color="primary"
        mandatory
        @change="change"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="'All packs'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in packs"
          :key="item.id"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  data () {
    return {
      selected: 0,
    }
  },
  computed: {
    ...mapState({
      packs: state => state.packs.list,
      pack: state => state.packs.pack,
      // items: state => state.trainings.items,
    }),
  },
  methods: {
    change (value) {
      this.$store.commit('trainings/remove')

      if (value === 0) // All packs
        this.$store.commit('packs/setPack', 'all')
      else
        this.$store.commit('packs/setPack', this.packs[value - 1])
    },
  },
}
</script>

<style scoped>
.v-navigation-drawer {
  height: 100%;
  width: auto;
  max-height: 100%;
  /*min-height: 950px;*/
}
</style>
