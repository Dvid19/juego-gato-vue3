import api from "./api.service";

export const chatsGet = async () => await api.get('/chats-get');