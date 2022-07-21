import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  builder: 'webpack',
  build: {
    transpile: ['vue-demi'],
  },
  ssr: false,
  css: [
    '@/style.css'
  ],
  webpack: {
    extractCSS: false
  }
})
