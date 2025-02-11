<template>
  <div class="fixed top-4 right-8 flex items-center space-x-4">
    <a
      v-for="item in socialLinks"
      :key="item.platform"
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-white/80 hover:text-white transition-colors"
    >
      <div :class="item.icon" class="text-xl"></div>
    </a>
  </div>
</template>

<script setup lang="ts">
const socialLinks = [
  { platform: 'bilibili', url: '#', icon: 'i-simple-icons-bilibili' },
  { platform: 'youtube', url: '#', icon: 'i-simple-icons-youtube' },
  { platform: 'twitter', url: '#', icon: 'i-simple-icons-twitter' },
  { platform: 'github', url: '#', icon: 'i-simple-icons-github' }
]
</script>
