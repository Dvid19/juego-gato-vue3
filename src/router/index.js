import { createRouter, createWebHistory } from "vue-router";
import Lobby from "../views/Lobby.vue";
import GameGato from "../views/GameGato.vue";

const routes = [
    {
        path: "/",
        redirect: "/lobby"
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

export default router;