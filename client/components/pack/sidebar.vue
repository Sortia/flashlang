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
    <!--    <v-list-->
    <!--      nav-->
    <!--      dense-->
    <!--      style="position: absolute; bottom: 0; left: 80px"-->
    <!--    >-->
    <!--      <v-menu-->
    <!--        v-model="menu"-->
    <!--        :close-on-content-click="false"-->
    <!--        :nudge-width="200"-->
    <!--        offset-x-->
    <!--      >-->
    <!--        <template v-slot:activator="{ on, attrs }">-->
    <!--          <v-btn-->
    <!--            color="indigo"-->
    <!--            dark-->
    <!--            v-bind="attrs"-->
    <!--            v-on="on"-->
    <!--          >-->
    <!--            Settings-->
    <!--          </v-btn>-->
    <!--        </template>-->

    <!--        <v-card>-->
    <!--          <v-list>-->
    <!--            <v-list-item>-->
    <!--              <v-list-item-content>-->
    <!--                <v-list-item-title>Settings</v-list-item-title>-->
    <!--              </v-list-item-content>-->
    <!--            </v-list-item>-->
    <!--          </v-list>-->

    <!--          <v-divider />-->

    <!--          <v-list>-->
    <!--            <v-list-item>Show side:</v-list-item>-->
    <!--            <v-list-item>-->
    <!--              <v-list-item-action>-->
    <!--                <v-switch-->
    <!--                  v-model="message"-->
    <!--                  loading="off"-->
    <!--                />-->
    <!--              </v-list-item-action>-->
    <!--              <v-list-item-title>Enable messages</v-list-item-title>-->
    <!--            </v-list-item>-->
    <!--            <v-divider />-->

    <!--            <v-card-actions>-->
    <!--              <v-spacer />-->

    <!--              <v-btn-->
    <!--                text-->
    <!--                @click="menu = false"-->
    <!--              >-->
    <!--                Cancel-->
    <!--              </v-btn>-->
    <!--              <v-btn-->
    <!--                color="primary"-->
    <!--                text-->
    <!--                @click="menu = false"-->
    <!--              >-->
    <!--                Save-->
    <!--              </v-btn>-->
    <!--            </v-card-actions>-->
    <!--          </v-list>-->
    <!--        </v-card>-->
    <!--      </v-menu>-->
    <!--    </v-list>-->
    <div class="overflow-hidden" style="position:absolute; bottom: 0; width: 100%">
      <v-divider />

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
      this.show_side_label = 'Показать ' + value ? 'слово' : 'перевод'
    },
  },
  mounted () {
    this.$axios.get('/api/settings/').then((res) => {
      this.show_side = res.data.find(item => item.setting === 'study_show_side').value || 'first'
    })
  },
  methods: {
    change (value) {
      this.$store.commit('trainings/remove')

      if (value === 0) // All packs
        this.$store.commit('packs/setPack', 'all')
      else
        this.$store.commit('packs/setPack', this.packs[value - 1])
    },
    saveSettings () {
      const settings = [
        {
          name: 'study_show_side',
          value: this.show_side,
        },
      ]

      this.$axios.post('/api/settings/set', { settings }).then(() => {
        this.$notifier.showMessage({ content: 'Успешно!', color: 'pink' })
        this.$bus.$emit('test-event')
      }).catch(() => {
        this.$notifier.showMessage({ content: 'Ошибка!', color: 'pink' })
      })
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
