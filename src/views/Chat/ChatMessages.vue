<template>
  <div class="flex-1 overflow-y-auto p-4 space-y-3">
    <div 
      v-for="m in messages" 
      :key="m.id"
      :class="m.user_id === user.id ? 'text-right' : 'text-left'"
    >
      <div 
        class="inline-block px-3 py-2 rounded-lg"
        :class="m.user_id === user.id ? 'bg-blue-500 text-white' : 'bg-gray-200'"
      >
        {{ m.contenido }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  messages: Array,
  user: Object
});
</script>
