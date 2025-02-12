<script setup lang="ts">
// 组件会自动导入，无需手动 import
</script>

<template>
  <main class="min-h-screen w-full relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
    <div class="relative">
      <NavBar />
      <slot></slot>
    </div>
  </main>
</template>
