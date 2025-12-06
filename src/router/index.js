import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.store";

import Lobby from "../views/Lobby.vue";
import GameGato from "../views/GameGato.vue";
import Login from "../views/Auth/Login.vue";
import ChatPage from "../views/Chat/ChatPage.vue";

import GatoMenuMultijugadorView from "../views/GameGato/GatoMenuMultijugadorView.vue";
import GatoSalaEsperaView from "../views/GameGato/GatoSalaEsperaView.vue";
import GatoUnirsePartidaView from "../views/GameGato/GatoUnirsePartidaView.vue";
import GatoPlayGameView from "../views/GameGato/GatoPlayGameView.vue";

const routes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/",
        redirect: "/login",
        meta: { public: true }
    },
    {
        path: "/chat",
        name: "Chat",
        component: ChatPage,
    },  
    {
        path: "/lobby",
        name: "Lobby",
        component: Lobby,
        meta: { requiresAuth: true }
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
        component: GatoMenuMultijugadorView,
        meta: { requiresAuth: true }
    },
    // Sala de espera
    {
        path: "/gato-sala-espera/:code",
        name: "GatoSalaEspera",
        component: GatoSalaEsperaView,
        meta: { requiresAuth: true }
    },
    // Unirse a una partida
    {
        path: "/gato-unirse-partida",
        name: "GatoUnirsePartida",
        component: GatoUnirsePartidaView,
        meta: { requiresAuth: true }
    },
    // Juego principal 
    {
        path: "/gato-play-game/:code?",
        name: "GatoPlayGame",
        component: GatoPlayGameView,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    if (to.meta.requiresAuth && !auth.token) {
        next('/login');
    } else {
        next();
    }
    
});

export default router;