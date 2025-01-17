<script setup lang="ts">
import Logo from '@public/icons/logo.svg'
import { computed } from 'vue';

interface LinkCardProps {
  title: string
  desc?: string
  link: string
  icon?: string
}

const props = withDefaults(defineProps<LinkCardProps>(), {
  icon: Logo,
  title: '标题',
  desc: '--',
  link: '',
})

/**是否存在链接 */
const isLink = computed(()=>{
  return props.link !== ''
})

/**
 * 打开链接
 */
const openLink = () => {
  if(!isLink.value) return
  const a = document.createElement('a')
  a.setAttribute('href', props.link)
  a.setAttribute('target', '_blank')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

</script>

<template>
  <div class="py-3 px-4 flex items-center border-slate-200 border rounded-lg gap-x-1 hover:shadow hover:bg-slate-50 duration-300" :class="{'cursor-pointer':isLink}" @click="openLink">
    <img :src="icon" class="size-10 p-1 border-slate-200 border object-contain rounded-lg"/>
    <div class="size-full flex flex-col items-start justify-between">
      <span class="text-sm font-bold text-slate-950 line-clamp-1">标题</span>
      <span class="text-xs text-slate-500 line-clamp-1">描述</span>
    </div>
  </div>
</template>

<style module lang="scss"></style>
