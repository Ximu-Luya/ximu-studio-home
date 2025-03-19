<template>
  <div class="container mx-auto px-4 pt-24 md:pt-32 pb-8">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-12">项目展示</h1>
    
    <div class="flex flex-col gap-24">
      <div v-for="(project, index) in projects" :key="project.title" 
           class="flex flex-col md:flex-row gap-8 items-center">
        <!-- 项目图片 - 在奇数项目靠左，偶数项目靠右 -->
        <div :class="[
          'relative overflow-hidden w-full md:w-1/2 rounded-2xl border border-gray-700/40 shadow-lg shadow-blue-900/10',
          { 'md:order-1': index % 2 !== 0 }
        ]">
          <img :src="project.image" :alt="project.title" 
               class="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        </div>
        
        <!-- 项目信息 -->
        <div class="w-full md:w-1/2">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ project.title }}</h3>
          <p class="text-gray-200 mb-6">{{ project.description }}</p>
          
          <!-- 技术标签 -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tag in project.tags" :key="tag"
                  class="px-3 py-1 text-sm bg-gray-700/40 text-gray-100 rounded-full border border-gray-600/30">
              {{ tag }}
            </span>
          </div>
          
          <!-- 项目链接 - 按照图中样式修改 -->
          <div class="mt-4">
            <div class="text-gray-400 mb-2">/// ACTION</div>
            <div class="flex flex-col gap-2">
              <a :href="project.link" target="_blank"
                 class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <div class="i-icon-park-outline-chart-line-area text-xl mr-3 text-blue-500"></div>
                <span>查看项目</span>
              </a>
              <a :href="project.link" target="_blank"
                 class="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
                <div class="i-icon-park-outline-info text-xl mr-3 text-green-500"></div>
                <span>更多信息</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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

const projects = [
  {
    title: '个人作品集网站',
    description: '基于 Nuxt3 开发的响应式个人网站，展示个人作品和技术博客。采用现代化的设计风格，结合流畅的动画效果。',
    tags: ['Nuxt3', 'Vue3', 'TypeScript', 'UnoCSS'],
    link: 'https://github.com',
    image: '/images/banner.png'
  },
  {
    title: '智能助手系统',
    description: '一个基于人工智能的智能助手系统，能够帮助用户处理日常任务、回答问题并提供个性化建议。',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Vue'],
    link: 'https://github.com',
    image: '/images/banner.png'
  },
  {
    title: '跨平台桌面应用',
    description: '使用 Electron 开发的跨平台桌面应用，提供文件管理、数据分析等功能，支持 Windows、MacOS 和 Linux。',
    tags: ['Electron', 'React', 'Node.js', 'SQLite'],
    link: 'https://github.com',
    image: '/images/banner.png'
  }
]
</script>