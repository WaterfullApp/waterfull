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
import Logs from './pages/logs.vue'
import MapFind from './components/MapFind.vue'
import MapStep from './components/MapStep.vue'
import StepA from './components/StepA.vue'
import StepB from './components/StepB.vue'
import StepC from './components/StepC.vue'
import StepD from './components/StepD.vue'
import StepE from './components/StepE.vue'
import StepF from './components/StepF.vue'
import StepG from './components/StepG.vue'
import LogFind from './components/LogFind.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Index },
      { path: '/find', component: Find },
      { path: '/add', component: Add },
      { path: '/logs', component: Logs },
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
app.component('StepA', StepA)
app.component('StepB', StepB)
app.component('StepC', StepC)
app.component('StepD', StepD)
app.component('StepE', StepE)
app.component('StepF', StepF)
app.component('StepG', StepG)
app.component('LogFind', LogFind)
app.use(router).use(i18n).mount("#app")


