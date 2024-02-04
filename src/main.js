import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Index from './pages/index.vue'
import Find from './pages/find.vue'
import Add from './pages/add.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Index },
      { path: '/find', component: Find },
      { path: '/add', component: Add },
    ]
})

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en,
      es,
      fr
    }
})

createApp(App).use(router).use(i18n).mount("#app");

