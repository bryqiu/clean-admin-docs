import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    icon({
      iconDir: 'src/assets/icons',
      include: {
        ri: ['github-fill', 'eye-2-line', 'arrow-right-long-line', 'share-box-line'],
      },
    }),
    starlight({
      title: 'Clean Admin Docs',
      logo: {
        src: './src/assets/icons/logo.svg',
      },
      components: {
        SocialIcons: './src/components/systems/project-social.astro',
        Hero: './src/components/systems/hero.astro',
      },
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh',
        },
      },
      customCss: ['./src/styles/tailwind.css', './src/styles/global.css'],
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
})
