<template>
  <div class="container mx-auto px-4 pt-24 md:pt-32 pb-8">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-12">技术笔记</h1>

    <!-- 笔记列表 -->
    <div class="space-y-6">
      <article v-for="note in notes" :key="note.title"
               class="backdrop-blur-sm bg-black/30 rounded-2xl p-6 md:p-8 hover:bg-black/40 transition-all duration-300">
        <div class="flex flex-wrap gap-4 items-start justify-between mb-4">
          <h2 class="text-2xl font-bold text-white">{{ note.title }}</h2>
          <div class="flex items-center gap-4">
            <span class="px-3 py-1 text-sm bg-white/15 text-gray-100 rounded-full">
              {{ note.category }}
            </span>
            <time class="text-sm text-gray-400">{{ note.date }}</time>
          </div>
        </div>
        <p class="text-gray-200 leading-relaxed">{{ note.description }}</p>
        <div class="mt-4">
          <button class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <span class="mr-2">阅读全文</span>
            <div class="i-icon-park-outline-arrow-right text-lg"></div>
          </button>
        </div>
      </article>
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

const notes = [
  {
    title: '深入理解 Vue3 响应式原理',
    category: '前端开发',
    date: '2024-02-15',
    description: '探讨 Vue3 中的响应式系统实现原理，包括 Proxy 的使用和响应式数据的处理机制。'
  },
  {
    title: 'TypeScript 高级类型实践',
    category: '编程语言',
    date: '2024-02-10',
    description: '介绍 TypeScript 中的高级类型用法，包括条件类型、映射类型和类型推断等内容。'
  },
  {
    title: '现代化前端工程化实践',
    category: '工程化',
    date: '2024-02-05',
    description: '分享前端工程化的最佳实践，包括构建工具、代码规范、自动化测试等方面的内容。'
  }
]
</script>