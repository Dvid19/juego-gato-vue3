import api from "./api.service";

export const getConversations = async () => await api.get('/conversations');
export const getConversation = async ( conversationId ) => await api.get(`/conversations/${conversationId}/messages`);
export const postMessage = async ( conversationId, data ) => await api.post(`/conversations/${conversationId}/messages`, data);