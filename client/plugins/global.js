import Vue from 'vue'
import Sidebar from '../components/SidebarPlugin/SideBar.vue'
import SidebarLink from '../components/SidebarPlugin/SidebarLink.vue'

const SidebarStore = {
  showSidebar: false,
  displaySidebar (value) {
    this.showSidebar = value
  },
}
if (!Vue.$sidebar)
  Vue.$sidebar = SidebarStore

Vue.mixin({
  data () {
    return {
      sidebarStore: SidebarStore,
    }
  },
})

if (!Vue.prototype.$sidebar)
  Object.defineProperties(Vue.prototype, {
    $sidebar: {
      get () {
        return Vue.$sidebar
      },
    },
  })

Vue.component('side-bar', Sidebar)
Vue.component('sidebar-link', SidebarLink)
