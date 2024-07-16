import Home from "@/components/Home.vue";
import SingerPage from "@/components/SingerPage.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/singer/:id", component: SingerPage }
]

export default routes;