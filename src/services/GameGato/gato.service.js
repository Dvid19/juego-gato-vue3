import api from "../api.service";

export const game = async (code) => await api.get(`/games/${code}`);
export const createGameGato = async () => await api.post('/games'); 
export const joinGameGato = async (code) => await api.post(`/games/join/${code}`);
export const moveMade = async (code, index) => await api.post(`/games/${code}/move`, {index});
export const restartGame = async (code) => await api.post(`/games/${code}/restart`);