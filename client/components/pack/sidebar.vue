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
        @change="change($event)"
      >
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
    <div class="overflow-hidden sidebar-left">
      <v-bottom-navigation horizontal>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
            >
              <span>Настройки</span>

              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Настройки</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider />

            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch
                    v-model="show_side"
                    loading="off"
                    false-value="first"
                    true-value="second"
                  />
                </v-list-item-action>
                <v-list-item-title>{{ show_side_label }}</v-list-item-title>
              </v-list-item>
              <v-divider />
              <v-card-actions>
                <v-spacer />
                <v-btn text @click="menu = false">
                  Закрыть
                </v-btn>
                <v-btn color="primary" text @click="menu = false; saveSettings()">
                  Сохранить
                </v-btn>
              </v-card-actions>
            </v-list>
          </v-card>
        </v-menu>
      </v-bottom-navigation>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  data () {
    return {
      selected: 0,
      show_side: '',
      show_side_label: 'Показать слово',
      menu: false,

    }
  },
  computed: {
    ...mapState({
      packs: state => state.packs.list,
      pack: state => state.packs.pack,
      items: state => state.trainings.items,
    }),
  },
  watch: {
    show_side (value) {
      this.show_side_label = 'Показать ' + (value === 'first' ? 'слово' : 'перевод')
    },
  },
  mounted () {
    this.$axios.get('/api/settings/').then((res) => {
      this.show_side = res.data.find(item => item.setting === 'study_show_side') ? res.data.find(item => item.setting === 'study_show_side').value : 'first'
    })
  },
  methods: {
    change (value) {
      this.$store.commit('trainings/remove')
      this.$store.commit('packs/setPack', this.packs[value])
    },
    saveSettings () {
      const settings = [
        {
          name: 'study_show_side',
          value: this.show_side,
        },
      ]

      this.$axios.post('/api/settings/set', { settings }).then(() => {
        this.$notifier.show()
        this.$bus.$emit('test-event')
      }).catch(() => {
        this.$notifier.error()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  height: 100%;
  width: auto;
  max-height: 100%;
  /*min-height: 950px;*/
}

.sidebar-left {
  position:absolute;
  bottom: 0;
  width: 100%;

  @media screen and (max-width: 959px) {
    position: initial;
  }
}
</style>
