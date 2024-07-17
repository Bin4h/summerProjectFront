import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes
})

const isAuthenticated = () => !!localStorage.getItem('isAuthorised');

router.beforeEach(async (to, from, next) => {
    if (to.path !== '/login' && !isAuthenticated()) next({path: '/login'});
    else next()
});

export default router;