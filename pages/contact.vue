<template>
  <div class="container mx-auto px-4 pt-24 md:pt-32 pb-8">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-12">联系我</h1>

    <!-- 联系信息 -->
    <section class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="item in contactInfo" :key="item.title"
             class="backdrop-blur-sm bg-black/20 rounded-xl p-6 hover:bg-black/30 transition-all duration-300">
          <div :class="[item.icon, 'text-3xl text-white mb-4']"></div>
          <h3 class="text-lg font-medium text-white mb-2">{{ item.title }}</h3>
          <p class="text-gray-300">{{ item.value }}</p>
        </div>
      </div>
    </section>

    <!-- 社交媒体 -->
    <section>
      <h2 class="text-3xl font-bold text-white mb-8">社交媒体</h2>
      <div class="backdrop-blur-sm bg-black/20 rounded-2xl p-6 md:p-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a v-for="link in socialLinks" :key="link.name"
             :href="link.url" target="_blank"
             class="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 rounded-xl hover:bg-white/5">
            <div :class="[link.icon, 'text-2xl']"></div>
            <span class="font-medium">{{ link.name }}</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const contactInfo = [
  { icon: 'i-icon-park-outline-mail', title: '邮箱', value: 'contact@ximu.com' },
  { icon: 'i-icon-park-outline-phone', title: '电话', value: '+86 123 4567 8900' },
  { icon: 'i-icon-park-outline-map', title: '地址', value: '中国 北京' }
]

const socialLinks = [
  { name: 'GitHub', icon: 'i-simple-icons-github', url: 'https://github.com' },
  { name: 'Bilibili', icon: 'i-simple-icons-bilibili', url: 'https://bilibili.com' },
  { name: 'JueJin', icon: 'i-simple-icons-juejin', url: 'https://juejin.cn' },
  { name: 'CSDN', icon: 'i-simple-icons-csdn', url: 'https://csdn.net' }
]
</script>