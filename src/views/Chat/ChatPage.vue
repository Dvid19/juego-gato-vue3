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
import ConversationsList from "./ConversationsList.vue";
import ChatMessages from "./ChatMessages.vue";
import MessageInput from "./MessageInput.vue";

import echo from "../../resources/echo";
import { useAuthStore } from "../../stores/auth.store";
import { getConversation, getConversations, postMessage } from "../../services/conversation.service";

const auth = useAuthStore();

const conversations = ref([]);
const messages = ref([]);
const activeConversationId = ref(null);
const user = ref(null);

// Cargar usuario autenticado
onMounted(async () => {
  user.value = auth.user;
  loadConversations();
});

// Cargar conversaciones
async function loadConversations() {
  const { data } = await getConversations();
  conversations.value = data;
}

// Cargar mensajes de una conversación
async function loadConversation(conversation) {
  activeConversationId.value = conversation.id;

  const response = await getConversation(conversation.id);
  messages.value = response.data.data; // paginación

  listenToChannel(conversation.id);
}

// Escuchar WebSocket
function listenToChannel(conversationId) {
  console.log('Ya inicio la busqueda de reverb.')
  echo.private(`chat.${conversationId}`).listen("Mensaje", (e) => {
    messages.value.push(e);
    console.log("data de reverb: ", e);
  });
}

// Enviar mensaje API
async function sendMessage(text) {
  if (!activeConversationId.value) return;

  const response = await postMessage(activeConversationId.value, {
    content: text, type: "texto"
  });

  messages.value.push(response.data);
}
</script>
