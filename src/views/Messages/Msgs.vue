<template>

    <div class="flex flex-col items-start justify-between min-h-[100vh] max-w-2xl mx-auto py-12">

        <!-- Chats con users -->
        <div class="flex flex-col w-full gap-3"> 
            <div v-for="chat in usersChats" :key="chat.id" class="border border-black bg-black text-white px-3 py-2 rounded-md">
                <p class="font-medium">{{ chat.userName }}</p>
                <p class="font-base text-sm">{{ chat.lastMsg }}</p>
            </div>
        </div>

    </div>

</template>

<script setup>
import { ref } from "vue"

const usersChats = ref([
    {
        id:1, userName: "Juan Perez", lastMsg: "Hola señora que tal le fue en la fiesta"
    }
]); 

</script>