import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VueBox',
  description: 'Developer documentation',

  theme: defaultTheme({
    navbar: ['/'],
  }),

  bundler: viteBundler(),
})
