import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.store";

import Lobby from "../views/Lobby.vue";
import GameGato from "../views/GameGato.vue";
import Login from "../views/Auth/Login.vue";
import ChatPage from "../views/Chat/ChatPage.vue";

import GatoMenuMultijugadorView from "../views/GameGato/GatoMenuMultijugadorView.vue";
import GatoSalaEsperaView from "../views/GameGato/GatoSalaEsperaView.vue";
import GatoUnirsePartidaView from "../views/GameGato/GatoUnirsePartidaView.vue";

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
    }, 

    // Gato - Multijugador

    // Menu multijugador
    {
        path: "/gato-menu-multijugador",
        name: "GatoMenuMultijugador",
        component: GatoMenuMultijugadorView
    },
    // Sala de espera
    {
        path: "/gato-sala-espera/:code",
        name: "GatoSalaEspera",
        component: GatoSalaEsperaView
    },
    // Unirse a una partida
    {
        path: "/gato-unirse-partida",
        name: "GatoUnirsePartida",
        component: GatoUnirsePartidaView
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