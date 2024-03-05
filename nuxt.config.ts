// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { 
    head: {
      title: 'Lorys Mallet - Portfolio',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
        }
      ],
    }
  },
  modules: ['@nuxt/content'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'tailwindcss/nesting': 'postcss-nesting',
    },
  },
  css: ['~/assets/css/main.css'],
});
