import './assets/main.css'

import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'

const routes = [
    { path: "/", component: Home },
    { path: "/singer", component: User }
]
  
const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App).use(router).mount('#app')
