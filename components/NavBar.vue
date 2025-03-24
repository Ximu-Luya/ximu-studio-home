<template>
  <nav
    class="fixed z-50 px-6 py-4 w-full md:top-0 md:left-0 md:right-0 bottom-0 md:bottom-auto transition-all duration-300"
    :class="[showNav ? 'opacity-100' : 'opacity-0 pointer-events-none']"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-center">
      <div class="group flex items-center gap-x-2 bg-gray-900/60 backdrop-blur rounded-full border border-gray-700/50 p-1 transition-all duration-300 hover:scale-[1.05] hover:bg-gray-800/70 shadow-lg shadow-purple-900/20">
        <div class="absolute h-9 w-16 bg-gradient-to-b from-blue-600 to-purple-700 rounded-full shadow-md transition-all duration-300" :style="{
          transform: `translateX(${activeIndex * 72}px)`,
        }" />
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="item.text"
          :to="item.link"
          class="relative flex items-center justify-center w-16 h-9 rounded-full transition-all duration-200"
          :class="[
            $route.path === item.link
              ? 'text-white'
              : 'text-gray-400 hover:text-gray-200'
          ]"
        >
          <div :class="item.icon" class="text-2xl"></div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const navItems = [
  { text: '主页', link: '/', icon: 'i-icon-park-outline-home' },
  { text: '项目', link: '/projects', icon: 'i-icon-park-outline-system' },
  { text: '笔记', link: '/notes', icon: 'i-icon-park-outline-book-one' },
  { text: '关于', link: '/about', icon: 'i-icon-park-outline-user' }
]

const activeIndex = computed(() => {
  return navItems.findIndex(item => item.link === route.path)
})

const isMobile = ref(false)
const showNav = ref(true)

const updateDeviceType = () => {
  isMobile.value = window.innerWidth < 768
}

const handleScroll = () => {
  // 在移动端始终显示
  if (isMobile.value) {
    showNav.value = true
    return
  }
  
  // 在PC端，首页时根据滚动位置显示，非首页始终显示
  if (route.path === '/') {
    showNav.value = window.scrollY > window.innerHeight * 0.2
  } else {
    showNav.value = true
  }
}

onMounted(() => {
  updateDeviceType()
  handleScroll()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', updateDeviceType)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateDeviceType)
})
</script>
