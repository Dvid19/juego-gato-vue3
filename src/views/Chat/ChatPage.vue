<template>
  <div class="flex h-screen">
    <!-- Lista de conversaciones -->
    <ConversationsList 
      :conversations="conversations" 
      @select="loadConversation" 
    />

    <!-- Chat -->
    <div class="flex flex-col flex-1 border-l">
      <ChatMessages 
        :messages="messages" 
        :user="user"
      />
      <MessageInput 
        @send="sendMessage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ConversationsList from "./ConversationsList.vue";
import ChatMessages from "./ChatMessages.vue";
import MessageInput from "./MessageInput.vue";

const conversations = ref([]);
const messages = ref([]);
const activeConversationId = ref(null);
const user = ref(null);

// Cargar usuario autenticado
onMounted(async () => {
  user.value = (await axios.get("/api/user")).data;
  loadConversations();
});

// Cargar conversaciones
async function loadConversations() {
  conversations.value = (await axios.get("/api/conversations")).data;
}

// Cargar mensajes de una conversación
async function loadConversation(conversation) {
  activeConversationId.value = conversation.id;

  let response = await axios.get(`/api/conversations/${conversation.id}/messages`);
  messages.value = response.data.data; // paginación

  listenToChannel(conversation.id);
}

// Escuchar WebSocket
function listenToChannel(conversationId) {
  window.Echo.channel(`chat.${conversationId}`).listen("MessageSent", (e) => {
    messages.value.push(e.message);
  });
}

// Enviar mensaje API
async function sendMessage(text) {
  if (!activeConversationId.value) return;

  let response = await axios.post(`/api/conversations/${activeConversationId.value}/messages`, {
    contenido: text
  });

  messages.value.push(response.data);
}
</script>
