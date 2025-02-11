<script setup lang="ts">
// 组件会自动导入，无需手动 import
</script>

<template>
  <main class="min-h-screen w-full bg-[#1a1a2e] relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
    <div class="relative">
      <NavBar />
      <HeroSection />
      <SocialIcons />
      <LatestProject
        title="重庆轨道交通·线路底纹"
        description="Chongqing Rail Transit Line Patterns"
        date="20240309"
      />
    </div>
  </main>
</template>
