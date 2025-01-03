export default defineNuxtConfig ({
  devtools: { enabled: true },
  compatibilityDate: "2025-01-03",
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  modules: ["@nuxtjs/supabase"],
  supabase: { redirect: false},
})