import './assets/main.css'

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ru'

import '@quasar/extras/roboto-font/roboto-font.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

createApp(App)
  .use(Quasar, {
    plugins: {},
    lang: quasarLang
  })
  .mount('#app')
