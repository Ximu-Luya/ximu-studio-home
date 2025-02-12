<template>
  <nav
    class="fixed z-50 px-6 py-4 w-full md:top-0 md:left-0 md:right-0 bottom-0 md:bottom-auto"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-center">
      <div class="flex items-center gap-x-2 bg-white/5 rounded-full border border-white/10 p-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.text"
          :to="item.link"
          class="flex items-center justify-center w-18 h-8 rounded-full transition-all duration-200"
          :class="[
            $route.path === item.link
              ? 'bg-gradient-to-b from-white/15 to-white/5 shadow-lg text-white'
              : 'text-white/40 hover:text-white/60 hover:bg-white/5'
          ]"
        >
          <div :class="item.icon" class="text-2xl"></div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { text: '主页', link: '/', icon: 'i-icon-park-outline-home' },
  { text: '项目', link: '/projects', icon: 'i-icon-park-outline-folder' },
  { text: '笔记', link: '/notes', icon: 'i-icon-park-outline-notes' },
  { text: '关于', link: '/about', icon: 'i-icon-park-outline-user' },
  { text: '联系', link: '/contact', icon: 'i-icon-park-outline-mail' }
]
</script>
