import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

export function isAuthenticated() {
    return !!localStorage.getItem('isAuthorised');
  }

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isAuthenticated()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });

createApp(App).use(router).mount('#app')
