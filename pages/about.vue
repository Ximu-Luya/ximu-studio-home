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
                  <p class="text-gray-300">前端 / 全栈开发</p>
                </div>
                
                <!-- 自我介绍 -->
                <div>
                  <p class="text-lg text-gray-200 leading-relaxed mb-6">
                    我是西木，西木来自于西木野真姬，所以它应该是 Nishiki 的日文发音，有时候西木无法直接用于一些账号的昵称，这时候我喜欢加上名——鹿亚。我喜欢很多游戏、动漫、电视剧、小说，其中最喜欢少女前线、我的世界、群星。
                  </p>
                  <p class="text-lg text-gray-200 leading-relaxed">
                    我是一名前端，平时爱折腾，喜欢分享，理想是做一个自己的游戏，虽然它现在仅处在最初级的阶段，偶尔也捣鼓捣鼓 AI，现在主要用 Cursor 进行开发。
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
    
    <!-- 联系方式和社交媒体 -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-white mb-8">联系我</h2>
      <div class="backdrop-blur-lg bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-700/40 shadow-lg shadow-blue-900/10">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
          <!-- 邮箱联系方式 -->
          <div class="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-4 rounded-xl hover:bg-gray-700/30">
            <div class="i-icon-park-outline-mail text-2xl text-blue-400"></div>
            <span class="font-medium">XimuLuya@qq.com</span>
          </div>
          
          <!-- 社交媒体链接 -->
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

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const skills = [
  { name: '前端开发', level: 90, color: 'from-blue-600 to-purple-600' },
  { name: '后端开发', level: 70, color: 'from-green-500 to-blue-500' },
  { name: 'UI交互设计', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: '移动开发', level: 60, color: 'from-orange-500 to-red-500' }
]

const socialLinks = [
  { name: 'GitHub', icon: 'i-simple-icons-github', url: 'https://github.com/Ximu-Luya' },
  { name: 'Bilibili', icon: 'i-simple-icons-bilibili', url: 'https://space.bilibili.com/20061123' },
  { name: '掘金', icon: 'i-simple-icons-juejin', url: 'https://juejin.cn/user/421867901955214' },
  { name: 'CSDN', icon: 'i-simple-icons-csdn', url: 'https://blog.csdn.net/qq_33866817' }
]
</script>