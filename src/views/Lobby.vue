<template>

    <div class="flex flex-col items-center justify-center min-h-[100vh] my-12">

        <div class="flex flex-col gap-5">
            <button class="text-white font-bold text-lg bg-orange-600 p-6 min-w-[24rem] h-[12rem] rounded-lg">
                Jugar VS la CPU
            </button>

            <button class="text-white font-bold text-lg bg-green-600 p-6 min-w-[24rem] h-[12rem] rounded-lg">
                Crear partida online
            </button>

            <button class="text-white font-bold text-lg bg-blue-600 p-6 min-w-[24rem] h-[12rem] rounded-lg">
                Unirse a una partida online
            </button>
        </div>

    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    console.log('Hola wapo.')
})

</script>