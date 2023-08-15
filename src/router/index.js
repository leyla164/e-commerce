import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Produk from "../views/Produk.vue";
import store from "../store";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true ,}
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/"); // redirect to home
    } else {
        next();
    }
});


export default router;