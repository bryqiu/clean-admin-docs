import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: true,
    typescript: true,
    formatters: {
      html: true,
      markdown: true,
    },
  },
  {
    ignores: [
      'dist/**',
      '.vscode/**',
      '.idea/**',
      'node_modules/**',
      'src/assets/**',
      '.astro/**',
    ],
  },
)
