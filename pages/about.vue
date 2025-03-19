<template>
  <div class="container mx-auto px-4 pt-24 md:pt-32 pb-8">
    <!-- 关于我 -->
    <section class="mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">关于我</h1>
      <div class="backdrop-blur-lg bg-gray-800/40 rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-lg shadow-blue-900/10">
        <p class="text-lg text-gray-200 leading-relaxed mb-6">
          你好，我是西木，一名充满激情的全栈开发者和设计师。我热衷于将创意转化为现实，专注于创造优雅且用户友好的数字体验。
        </p>
        <p class="text-lg text-gray-200 leading-relaxed">
          在过去的几年里，我参与开发了多个成功的项目，涵盖Web应用、移动应用和桌面软件。我相信技术不仅仅是工具，更是实现梦想的桥梁。
        </p>
      </div>
    </section>

    <!-- 技能展示 -->
    <section>
      <h2 class="text-3xl font-bold text-white mb-8">专业技能</h2>
      <div class="space-y-6">
        <div v-for="skill in skills" :key="skill.name" class="backdrop-blur-lg bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 hover:bg-gray-800/40 transition-all duration-300">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-xl text-white font-medium">{{ skill.name }}</h3>
            <span class="text-gray-300">{{ skill.level }}%</span>
          </div>
          <div class="h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r transition-all duration-1000" 
                 :class="skill.color"
                 :style="{ width: `${skill.level}%` }"></div>
          </div>
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
  { name: '后端开发', level: 85, color: 'from-green-500 to-blue-500' },
  { name: 'UI/UX设计', level: 80, color: 'from-purple-500 to-pink-500' },
  { name: '移动开发', level: 75, color: 'from-orange-500 to-red-500' },
  { name: '数据分析', level: 70, color: 'from-blue-500 to-cyan-500' }
]
</script>