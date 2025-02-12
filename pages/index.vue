<script setup lang="ts">
const socialLinks = [
  { icon: 'i-simple-icons-github', url: 'https://github.com' },
  { icon: 'i-simple-icons-bilibili', url: 'https://bilibili.com' },
  { icon: 'i-simple-icons-juejin', url: 'https://juejin.cn' },
  { icon: 'i-simple-icons-csdn', url: 'https://csdn.net' },
]

// 点击箭头滚动到下一屏
const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}
</script>

<template>
  <!-- 首屏 -->
  <section class="relative h-screen flex flex-col text-white overflow-hidden">
    <!-- 背景图片 -->
    <div class="absolute inset-0 -z-10 bg-black">
      <img src="/images/banner.png" alt="banner" class="w-full h-full object-cover opacity-85">
    </div>

    <!-- 主要内容区域，使用 mt-auto 将内容块推到合适位置 -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <!-- 主标题 -->
      <h1 class="text-5xl md:text-8xl font-bold mb-8 text-center tracking-tight text-gray-100 banner-title">
        西木 is Nishiki
      </h1>

      <!-- 个人简介 -->
      <div class="backdrop-blur-sm bg-black/50 rounded-2xl px-8 py-6 mb-12 min-w-[280px] md:min-w-[480px]">
        <p class="text-lg md:text-xl text-center text-gray-200 mb-6">
          西木是西木野的西木
        </p>
        
        <!-- 社交媒体链接 -->
        <div class="flex justify-center gap-6">
          <a v-for="link in socialLinks" 
            :key="link.url" 
            :href="link.url" 
            target="_blank"
            class="text-3xl text-gray-400 hover:text-white transition-colors">
            <div :class="link.icon"></div>
          </a>
        </div>
      </div>
    </div>

    <!-- 底部箭头 -->
    <div class="absolute bottom-20 left-1/2 -translate-x-1/2 cursor-pointer" @click="scrollToNext">
      <div class="i-icon-park-outline-down text-6xl text-gray-400 animate-bounce hover:text-white transition-colors"></div>
    </div>

    <!-- 底部波浪 -->
    <div class="absolute bottom-0 left-0 right-0 -z-9">
      <img src="/images/banner-overlay.png" alt="overlay" class="w-full">
    </div>
  </section>

  <!-- 其他内容区域 -->
  <section class="min-h-screen p-8">
    <!-- 这里可以添加其他内容 -->
  </section>
</template>

<style scoped>
.banner-title {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.animate-bounce {
  animation: bounce 2s infinite
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(10px)
  }
}
</style>
