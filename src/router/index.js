import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.store";

import Lobby from "../views/Lobby.vue";
import GameGato from "../views/GameGato.vue";
import Login from "../views/Auth/Login.vue";
import ChatPage from "../views/Chat/ChatPage.vue";

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
        path: "/chat",
        name: "Chat",
        component: ChatPage,
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