<template>
  <div class="fixed bottom-12 right-12 max-w-md transform hover:scale-102 transition-transform">
    <div class="text-white/60 text-sm mb-2 pl-1">/// LATEST PROJECT</div>
    <div class="bg-black/30 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
      <div class="flex items-start justify-between mb-4">
        <div>
          <h3 class="text-xl font-bold text-white mb-1">{{ title }}</h3>
          <p class="text-white/80">{{ description }}</p>
        </div>
        <div class="text-white/60 text-sm">{{ date }}</div>
      </div>
      <div class="aspect-video rounded-xl overflow-hidden">
        <div class="w-full h-full bg-gradient-to-br from-[#FFD700] via-[#FF4136] to-[#2ECC40] grid place-items-center transition-all duration-500 hover:scale-105">
          <div class="text-white/90 font-medium">Project Preview</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  image: string
}>()
</script>
