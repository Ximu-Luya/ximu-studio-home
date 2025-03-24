<template>
  <div class="container mx-auto px-4 pt-24 md:pt-32 pb-8">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-12">笔记</h1>

    <!-- 笔记列表 -->
    <div class="space-y-6">
      <article v-for="note in notes" :key="note.title"
               class="backdrop-blur-lg bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-700/40 hover:bg-gray-800/40 transition-all duration-300 shadow-lg shadow-blue-900/10">
        <div class="flex flex-wrap gap-4 items-start justify-between mb-4">
          <h2 class="text-2xl font-bold text-white">{{ note.title }}</h2>
          <div class="flex items-center gap-4">
            <span class="px-3 py-1 text-sm bg-gray-700/40 text-gray-100 rounded-full border border-gray-600/30">
              {{ note.category }}
            </span>
            <time class="text-sm text-gray-300">{{ note.date }}</time>
          </div>
        </div>
        <p class="text-gray-200 leading-relaxed">{{ note.description }}</p>
        <div class="mt-4">
          <button class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <a :href="note.url" target="_blank" class="mr-2">阅读全文</a>
            <div class="i-icon-park-outline-arrow-right text-lg"></div>
          </button>
        </div>
      </article>
      
      <!-- 更多内容链接区域 -->
      <div class="mt-12 text-center backdrop-blur-lg bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-700/40 shadow-lg shadow-blue-900/10">
        <h3 class="text-xl font-bold text-white mb-4">更多内容</h3>
        <p class="text-gray-200 mb-6">访问以下平台查看我的更多文章与笔记</p>
        <div class="flex justify-center gap-6">
          <a href="https://blog.csdn.net/qq_33866817" target="_blank" 
             class="flex items-center gap-2 px-5 py-3 bg-gray-700/40 text-gray-100 rounded-lg border border-gray-600/30 hover:bg-gray-700/60 transition-all">
            <div class="i-icon-park-outline-link text-lg"></div>
            <span>CSDN</span>
          </a>
          <a href="https://juejin.cn/user/421867901955214/posts" target="_blank" 
             class="flex items-center gap-2 px-5 py-3 bg-gray-700/40 text-gray-100 rounded-lg border border-gray-600/30 hover:bg-gray-700/60 transition-all">
            <div class="i-icon-park-outline-link text-lg"></div>
            <span>掘金</span>
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

const notes = [
  {
    title: '00后回顾自己17年的游戏生涯',
    category: '游戏',
    date: '2023-08-23',
    description: '大家好，我是西木，00年出生的00后。"西木"这个名字来自于"西木野"，代表的是兴趣领域的我。因为一个内部与游戏有关的活动，而且还是没有限定主题的泛泛而谈，我稍稍简单回顾了一下自己的游戏经历，发现玩过的游戏都有点数不清了，突然来了一股分享欲想来分享一下自己游戏经历。',
    url: 'https://blog.csdn.net/qq_33866817/article/details/132459918?fromshare=blogdetail&sharetype=blogdetail&sharerId=132459918&sharerefer=PC&sharesource=qq_33866817&sharefrom=from_link'
  },
  {
    title: 'ChatGPT及相关产品体验与研究',
    category: 'AI',
    date: '2023-02-17',
    description: '我个人认为，无论是程序员，甚至扩大范围到普通从业者或一个普通人，对我们来说人工智能带来的对未来改变，必定是如同人类历史上"蒸汽时代、工业时代、信息时代"同等程度的"人工智能时代"，从历史来看，大时代的更迭一定会导致很多岗位会消失，也一定会催生更多的岗位，被淘汰的是跟不上时代的人，如何运用人工智能更好地服务于自己，积极迎接新时代，才是我们需要首要考虑的事。',
    url: 'https://blog.csdn.net/qq_33866817/article/details/129091946?fromshare=blogdetail&sharetype=blogdetail&sharerId=129091946&sharerefer=PC&sharesource=qq_33866817&sharefrom=from_link'
  },
  {
    title: '本地配置多个git账户（公司、GitHub）',
    category: 'Git',
    date: '2021-10-19',
    description: '在公司探索新知识（摸鱼）时，我们一般会需要在GitHub上维护维护自己的小仓库。这样如果使用原来的配置就会发生Push代码时Permission Denied了。所以我们有以下几步：公司电脑是Mac，所以以下内容均为Mac上的操作，但不同操作系统其实大同小异。不同仓库配置不同的提交用户信息我们在公司电脑上主要还是提交公司的代码，所以为了方便，git的global用户信息可以设置为公司要求的name和email。在自己的仓库下配置git账号信息可以覆盖掉全局的。cd <你的仓库地址>',
    url: 'https://blog.csdn.net/qq_33866817/article/details/120847864?fromshare=blogdetail&sharetype=blogdetail&sharerId=120847864&sharerefer=PC&sharesource=qq_33866817&sharefrom=from_link'
  }
]
</script>