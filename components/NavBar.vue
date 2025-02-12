<template>
  <nav
    class="fixed z-50 px-6 py-4 w-full md:top-0 md:left-0 md:right-0 bottom-0 md:bottom-auto"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-center">
      <div class="group flex items-center gap-x-2 bg-white/5 rounded-full border border-white/10 p-1 transition-all duration-300 hover:scale-[1.05] hover:bg-white/10">
        <div class="absolute h-9 w-16 bg-gradient-to-b from-white/15 to-white/5 rounded-full shadow-lg transition-all duration-300" :style="{
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
              : 'text-white/40 hover:text-white/60'
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
import { computed } from 'vue'

const route = useRoute()
const navItems = [
  { text: '主页', link: '/', icon: 'i-icon-park-outline-home' },
  { text: '项目', link: '/projects', icon: 'i-icon-park-outline-folder' },
  { text: '笔记', link: '/notes', icon: 'i-icon-park-outline-notes' },
  { text: '关于', link: '/about', icon: 'i-icon-park-outline-user' },
  { text: '联系', link: '/contact', icon: 'i-icon-park-outline-mail' }
]

const activeIndex = computed(() => {
  return navItems.findIndex(item => item.link === route.path)
})
</script>
