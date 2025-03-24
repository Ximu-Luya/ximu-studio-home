<script setup lang="ts">
// 组件会自动导入，无需手动 import
</script>

<template>
  <main class="min-h-screen w-full relative overflow-hidden">
    <!-- 背景层 -->
    <div class="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 -z-20"></div>
    
    <!-- 渐变光效 -->
    <div class="fixed inset-0 -z-10">
      <div class="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-1/4 w-2/3 h-1/2 bg-purple-500/10 rounded-full blur-3xl transform translate-y-1/3"></div>
    </div>
    
    <!-- 背景网格 -->
    <div class="fixed inset-0 bg-grid-pattern opacity-5 -z-10"></div>
    
    <!-- 内容层 -->
    <div class="relative z-10">
      <NavBar />
      <slot></slot>
    </div>
  </main>
</template>

<style>
.bg-grid-pattern {
  background-size: 30px 30px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

/* 自定义滚动条样式 */
*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: transparent;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 10px;
  transition: all 0.3s;
}

*::-webkit-scrollbar-thumb:hover {
  background: rgba(140, 140, 180, 0.6);
}

body {
  background-color: #080C13;
}
</style>
