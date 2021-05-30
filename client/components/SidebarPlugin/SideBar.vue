<template>
  <div
    class="sidebar"
    :data-color="backgroundColor"
  >
    <div class="sidebar-wrapper">
      <div class="" style="z-index: 10">
        <div class="logo p-1">
          <a href="#" class="simple-text logo__container">
            <div class="logo-img">
              <img src="@/assets/img/vue-logo.png" alt="">
            </div>
            {{ title }}
          </a>
        </div>

        <slot name="content" />
        <ul class="nav nav-main__links mt-0">
          <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
          <slot>
            <sidebar-link
              v-for="(link,index) in sidebarLinks"
              :key="link.name + index"
              :to="link.path"
              :link="link"
              @click="closeNavbar"
            >
              <i :class="link.icon" />
              <p>{{ link.name }}</p>
            </sidebar-link>
          </slot>
        </ul>
        <ul v-if="$slots['bottom-links']" class="nav nav-bottom">
          <slot name="bottom-links" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarLink from './SidebarLink.vue'
import backgroundImagePath from '~/assets/img/sidebar-5.jpg'

export default {
  components: {
    SidebarLink,
  },
  props: {
    title: {
      type: String,
      default: 'Flashlang',
    },
    backgroundColor: {
      type: String,
      default: 'black',
      validator: (value) => {
        const acceptedValues = [ '', 'blue', 'azure', 'green', 'orange', 'red', 'purple', 'black' ]
        return acceptedValues.includes(value)
      },
    },
    backgroundImage: {
      type: String,
      default: '',
    },
    activeColor: {
      type: String,
      default: 'success',
      validator: (value) => {
        const acceptedValues = [ 'primary', 'info', 'success', 'warning', 'danger' ]
        return acceptedValues.includes(value)
      },
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return { backgroundImagePath }
  },
  provide () {
    return {
      autoClose: this.autoClose,
    }
  },
  computed: {
    sidebarStyle () {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
      }
    },
  },
}

</script>
<style>

  .sidebar .sidebar-wrapper {
    display: flex;
    flex-direction: column;
    background-size: auto 100%;
  }
  .sidebar-wrapper::before {
    background-color: #4257b2;
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }

 .sidebar .nav-main__links {
   flex: 1;
   padding-left: 0;
 }
 .sidebar .sidebar-wrapper .logo .logo__container {
   padding-left: 10px;
 }
</style>
