// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    starlight({
      title: 'Clean Admin Docs',
      logo: {
        src: './src/assets/icons/logo.svg',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/bryqiu/vue-clean-admin' },
        {
          icon: 'open-book',
          label: '专栏',
          href: 'https://github.com/bryqiu/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F',
        },
      ],
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh',
        },
      },
      customCss: ['./src/styles/tailwind.css'],
      plugins: [starlightThemeNova()],
      lastUpdated: true,
      sidebar: [
        {
          label: '入门指南',
          autogenerate: { directory: 'guides' },
        },
        {
          label: '功能模块',
          autogenerate: { directory: 'modules' },
        },
        {
          label: '工程配置',
          autogenerate: { directory: 'config' },
        },
        {
          label: '规范与约定',
          autogenerate: { directory: 'conventions' },
        },
        {
          label: '资源与支持',
          autogenerate: { directory: 'abouts' },
        },
      ],
    }),
    tailwind(),
  ],
});
