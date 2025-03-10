export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '@/assets/css/tailwind.css',
  ],

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt'
  ],

  build: {
    transpile: ['@nuxt/ui'],  // Ensure UI components are transpiled if necessary
    analyze: true,  // Optional: Use this to analyze the build size
  },
});
