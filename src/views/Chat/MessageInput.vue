<template>
  <div class="p-4 border-t flex">
    <input 
      v-model="text"
      type="text"
      class="flex-1 border p-2 rounded"
      @keypress.enter="send"
      placeholder="Escribe un mensaje..."
    />
    <button 
      class="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
      @click="send"
    >
      Enviar
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");

const emit = defineEmits(["send"]);

function send() {
  if (!text.value.trim()) return;
  emit("send", text.value);
  text.value = "";
}
</script>
