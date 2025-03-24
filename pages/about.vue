<template>
  <div class="container mx-auto px-4 pt-24 md:pt-32 pb-8">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">关于我</h1>
    
    <!-- 上部分：个人介绍和技能 -->
    <div class="flex flex-col md:flex-row gap-8 mb-16">
      <!-- 左侧：个人介绍 -->
      <div class="md:w-3/5">
        <section class="mb-8 md:mb-0">
          <div class="backdrop-blur-lg bg-gray-800/40 rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-lg shadow-blue-900/10 h-full">
            <div class="flex flex-col gap-8">
              <!-- 头像和介绍横向排列 (在中等屏幕以上) -->
              <div class="flex flex-col md:flex-row md:items-center gap-8">
                <!-- 头像和昵称 -->
                <div class="flex flex-col items-center">
                  <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700/50 mb-4">
                    <img src="/images/avatar.png" alt="西木头像" class="w-full h-full object-cover" />
                  </div>
                  <h2 class="text-2xl font-bold text-white mt-4">西木</h2>
                  <p class="text-gray-300">全栈开发者 / 设计师</p>
                </div>
                
                <!-- 自我介绍 -->
                <div>
                  <p class="text-lg text-gray-200 leading-relaxed mb-6">
                    你好，我是西木，一名充满激情的全栈开发者和设计师。我热衷于将创意转化为现实，专注于创造优雅且用户友好的数字体验。
                  </p>
                  <p class="text-lg text-gray-200 leading-relaxed">
                    在过去的几年里，我参与开发了多个成功的项目，涵盖Web应用、移动应用和桌面软件。我相信技术不仅仅是工具，更是实现梦想的桥梁。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- 右侧：技能展示 -->
      <div class="md:w-2/5">
        <section>
          <h2 class="text-3xl font-bold text-white mb-8">专业技能</h2>
          <div class="backdrop-blur-lg bg-gray-800/30 rounded-xl p-6 md:p-8 border border-gray-700/30 shadow-lg shadow-blue-900/10">
            <div class="space-y-6">
              <div v-for="skill in skills" :key="skill.name" class="group">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="text-xl text-white font-medium group-hover:text-blue-400 transition-colors duration-300">{{ skill.name }}</h3>
                  <span class="text-gray-300">{{ skill.level }}</span>
                </div>
                <div class="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r transition-all duration-1000" 
                       :class="skill.color"
                       :style="{ width: `${skill.level}%` }"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    
    <!-- 中部分：联系信息 -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-white mb-8">联系方式</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="item in contactInfo" :key="item.title"
             class="backdrop-blur-lg bg-gray-800/30 rounded-xl p-6 border border-gray-700/40 hover:bg-gray-800/40 transition-all duration-300 shadow-lg shadow-blue-900/10">
          <div :class="[item.icon, 'text-3xl text-blue-400 mb-4']"></div>
          <h3 class="text-lg font-medium text-white mb-2">{{ item.title }}</h3>
          <p class="text-gray-300">{{ item.value }}</p>
        </div>
      </div>
    </section>

    <!-- 下部分：社交媒体 -->
    <section>
      <h2 class="text-3xl font-bold text-white mb-8">社交媒体</h2>
      <div class="backdrop-blur-lg bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-700/40 shadow-lg shadow-blue-900/10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a v-for="link in socialLinks" :key="link.name"
             :href="link.url" target="_blank"
             class="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 rounded-xl hover:bg-gray-700/30">
            <div :class="[link.icon, 'text-2xl text-blue-400']"></div>
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

const skills = [
  { name: '前端开发', level: 90, color: 'from-blue-600 to-purple-600' },
  { name: '后端开发', level: 70, color: 'from-green-500 to-blue-500' },
  { name: 'UI交互设计', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: '移动开发', level: 60, color: 'from-orange-500 to-red-500' },
  { name: '产品思考', level: 75, color: 'from-blue-500 to-cyan-500' }
]

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