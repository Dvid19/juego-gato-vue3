<template>

    <div class="flex items-center justify-center">
        <h1 class="text-4xl font-medium text-black">
            Jugando al Gato
        </h1>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    console.log('Iniciemos la partida')
})

</script>