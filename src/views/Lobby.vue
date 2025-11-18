<template>

    <div class="flex items-center justify-center">
        <h1 class="text-4xl font-medium text-black">
            Estas preparado...
        </h1>
    </div>

    <div class="space-y-6">
        <button class="text-white font-medium bg-green-600 p-6 w-full h-[12rem]">
            Crear partida
        </button>

        <button class="text-white font-medium bg-blue-600 p-6 w-full h-[12rem]">
            Unirse a una partida
        </button>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    console.log('Hola wapo.')
})

</script>