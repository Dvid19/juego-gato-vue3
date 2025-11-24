import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.store";

import Lobby from "../views/Lobby.vue";
import GameGato from "../views/GameGato.vue";
import MsgPrueba from "../views/MsgPrueba.vue";
import Login from "../views/Auth/Login.vue";

const routes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/",
        redirect: "/lobby"
    },
    {
        path: "/reverb",
        name: "Reverb",
        component: MsgPrueba,
    },
    {
        path: "/lobby",
        name: "Lobby",
        component: Lobby
    },
    {
        path: "/game-gato",
        name: "GameGato",
        component: GameGato
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to) => {
    const auth = useAuthStore();
    if (to.meta.requiresAuth && !auth.token) {
        return '/login'
    }
});

export default router;