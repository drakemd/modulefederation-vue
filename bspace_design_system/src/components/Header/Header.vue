<template>
  <v-navigation-drawer
    color="surface"
    v-model="drawer"
    location="left"
    floating
    class="drawerShadow"
  >
    <v-img
      :height="38"
      class="my-3"
      contain
      :src="Logo"
    ></v-img>
    <v-divider class="mx-4"></v-divider>
    <v-img
      :height="70"
      class="my-4"
      contain
      :src="Avatar"
    ></v-img>
    <div class="d-flex justify-center text-caption font-weight-semibold poppins">{{ user.name }}</div>
    <v-divider class="mx-4 my-4"></v-divider>
    <ul>
      <li v-for="item in items">
        <div 
          @click="onClickRoute(item)"
          @mouseover="onMouseOver(item)"
          @mouseout="onMouseOut(item)"
          class="d-flex align-center w-80 mx-5 my-1 px-4 py-3"
          :class="{
            'menuButtonActive': isActive(item),
            'menuButton': !isActive(item),
          }"
        >
          <span class="mr-2">
            <DashboardIcon v-if="item.title === 'My Dashboard'" :stroke="getColor(item)" :size="22" />
            <ProbationIcon v-else-if="item.title === 'My Probation'" :stroke="getColor(item)" :size="22" />
            <OtherMenuIcon v-else :stroke="getColor(item)" :size="22" />
          </span>
          <span class="text-caption">{{ item.title }}</span>
        </div>
      </li>
    </ul>
  </v-navigation-drawer>
  <v-app-bar
    color="surface"
    :elevation="0"
    class="appbarShadow"
  >
    <v-app-bar-nav-icon class="d-lg-none" variant="text" @click.stop="toggle"></v-app-bar-nav-icon>
    <SearchInput />
    <v-spacer></v-spacer>
    <v-btn variant="text" rounded="xl" color="primary">
      <v-badge color="error" dot floating>
        <v-icon icon="mdi-bell-outline" color="primary" size="large"></v-icon>
      </v-badge>
    </v-btn>
      <!-- <v-btn variant="text" icon="mdi-bell-outline" color="primary"></v-btn> -->
    <v-btn variant="text" icon="mdi-dots-vertical" color="primary"></v-btn>
  </v-app-bar>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { Colors } from '../../constants/constants.js'
  import Logo from '../../assets/logo.png'
  import Avatar from '../../assets/avatar.png'
  import DashboardIcon from '../../assets/dashboardIcon.vue'
  import ProbationIcon from '../../assets/probationIcon.vue'
  import OtherMenuIcon from '../../assets/othermenuIcon.vue'
  import SearchInput from '../SearchInput/SearchInput.vue'

  const props = defineProps({
    user: Object
  })

  console.log('user', props)

  const defaultDrawer = window.innerWidth >= 1280
  const drawer = ref(defaultDrawer)
  const onHover = ref([])
  const router = useRouter()
  const route = useRoute()

  const items = [
    {
      title: 'My Dashboard',
      route: '/',
      icon: ''
    },
    {
      title: 'My Probation',
      route: '/probation',
      icon: ''
    },
    {
      title: 'Menu 3',
      route: '/menu3',
      icon: ''
    },
    {
      title: 'Menu 4',
      route: '/menu4',
      icon: ''
    },
    {
      title: 'Menu 5',
      route: '/menu5',
      icon: ''
    },
  ];

  function toggle() {
    drawer.value = !drawer.value
  }

  function onMouseOver(item){
    let exist = onHover.value.some(data => data == item.title)
    if (!exist) onHover.value = [...onHover.value, item.title]
  }

  function onMouseOut(item){
    onHover.value = onHover.value.filter(data => data !== item.title)
  }

  function getColor(item) {
    let active = isActive(item)
    if(active) return '#ffffff'
    let exist = onHover.value.some(data => data == item.title)
    if (exist) return '#ffffff'
    else return '#7B91B0'
  }

  function isActive(item) {
    if(!route) return false
    return item.route === route.path
  }

  function onClickRoute(item) {
    router.push(item.route)
  }
</script>

<style>
  .drawerShadow{
    border: 1px solid rgba(123, 145, 176, 0.3);
  }
  .appbarShadow{
    border: 1px solid rgba(123, 145, 176, 0.3);
  }
</style>

<style scoped>
  .menuButton{
    border-radius: 10px;
    color: #7B91B0;
    cursor: pointer;
  }
  .menuButtonActive{
    border-radius: 10px;
    background-color: v-bind('Colors.primary');
    color: white;
    cursor: pointer;
  }
  /* .menuButtonActive:hover{
    background-color: none;
    color: #7B91B0;
  } */
  .menuButton:hover{
    background-color: v-bind('Colors.primary');
    color: white;
  }
</style>