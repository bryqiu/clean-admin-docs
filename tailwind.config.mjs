import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  // plugins: [starlightPlugin()],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
};
