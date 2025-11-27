<template>
  <div class="w-1/4 border-r overflow-y-auto">
    <ul>
      <li 
        v-for="c in conversations" 
        :key="c.id" 
        class="p-4 border-b hover:bg-gray-100 cursor-pointer"
        @click="$emit('select', c)"
      >
        <div class="font-bold">
          Conversación #{{ c.id }}
        </div>
        <div class="text-gray-600 text-sm truncate">
          {{ c.messages?.[0]?.contenido || "Sin mensajes" }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  conversations: Array
});
</script>
