import { createApp } from 'vue'
import App from './main.vue'
import router from './router/index'
import store from './store/index'

import '../../assets/scss/app.common.scss'

createApp(App).use(store).use(router).mount('#app')

