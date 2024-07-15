import './assets/main.css'

import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Authorise from './components/Authorise.vue'

const routes = [
    { path: "/", component: Authorise }
]
  
const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App).use(router).mount('#app')
