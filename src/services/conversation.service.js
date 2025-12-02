import api from "./api.service";

export const getConversations = async () => await api.get('api/conversations');
export const getConversation = async ( conversationId ) => await api.get(`api/conversations/${conversationId}/messages`);
export const postMessage = async ( conversationId, data ) => await api.post(`api/conversations/${conversationId}/messages`, data);