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
import MapFind from './components/MapFind.vue'
import MapStep from './components/MapStep.vue'
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import Step4 from './components/Step4.vue'
import Step5 from './components/Step5.vue'
import Step6 from './components/Step6.vue'
import Step7 from './components/Step7.vue'

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
const app = createApp(App)
app.component('MapFind', MapFind)
app.component('MapStep', MapStep)
app.component('Step1', Step1)
app.component('Step2', Step2)
app.component('Step3', Step3)
app.component('Step4', Step4)
app.component('Step5', Step5)
app.component('Step6', Step6)
app.component('Step7', Step7)
app.use(router).use(i18n).mount("#app")


