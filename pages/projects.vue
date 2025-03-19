<template>
  <div class="container mx-auto px-4 pt-24 md:pt-32 pb-8">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-12">项目展示</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.title" 
           class="group backdrop-blur-lg bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/40 hover:bg-gray-800/40 transition-all duration-300 shadow-lg shadow-blue-900/10">
        <!-- 项目图片 -->
        <div class="relative h-48 overflow-hidden">
          <img :src="project.image" :alt="project.title" 
               class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
        </div>
        
        <!-- 项目信息 -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-3">{{ project.title }}</h3>
          <p class="text-gray-200 mb-4 line-clamp-3">{{ project.description }}</p>
          
          <!-- 技术标签 -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag"
                  class="px-3 py-1 text-sm bg-gray-700/40 text-gray-100 rounded-full border border-gray-600/30">
              {{ tag }}
            </span>
          </div>
          
          <!-- 项目链接 -->
          <a :href="project.link" target="_blank"
             class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <span class="mr-2">查看项目</span>
            <div class="i-icon-park-outline-arrow-right text-lg"></div>
          </a>
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