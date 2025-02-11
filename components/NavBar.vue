<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="text-2xl font-bold text-white/90 hover:text-white transition-colors">西木</div>
      <div class="flex items-center space-x-12">
        <NuxtLink
          v-for="item in navItems"
          :key="item.text"
          :to="item.link"
          class="text-white/70 hover:text-white transition-colors text-sm tracking-wide"
        >
          {{ item.text }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { text: 'About', link: '/about' },
  { text: 'Cool Stuff', link: '/cool-stuff' },
  { text: 'Designs', link: '/designs' },
  { text: 'Notes', link: '/notes' },
  { text: 'Links', link: '/links' }
]
</script>
