import api from "../api.service";

export const createGameGato = async () => await api.post('/games'); 
export const joinGameGato = async (code) => await api.post(`/games/join/${code}`)