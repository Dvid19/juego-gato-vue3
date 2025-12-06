<template>

    <div class="flex items-centet justify-center h-[100vh] max-w-4xl mx-auto">

        <div class="flex items-center justify-center w-full gap-4">

            <!-- Crear partida -->
            <button :class="['border-2 text-white text-lg font-medium py-3 px-6 rounded transition duration-300 ease-in-out',
                             loading ? 'bg-green-400 border-green-400' : 'bg-blue-600 border-blue-600 hover:bg-black hover:border-black']"
                :disabled="loading"
                @click="createGame"> 
                {{ loading ? 'Creando partida...' : 'Crear nueva partida' }}  
            </button>

            <!-- Unisrse a una partida -->
            <button class="bg-tranaparent border-2 border-blue-600 text-blue-600 text-lg font-medium py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-black hover:border-black hover:text-white"
                @click="joinGameTo"> 
                Unirse a una partida    
            </button>

        </div>

    </div>

</template>

<script setup>
import { createGameGato } from '../../services/GameGato/gato.service';
import { ref } from 'vue';
import router from '../../router';

const loading = ref(false);

const createGame = async () => {
    try {
        loading.value = true;
        const response = await createGameGato();
        router.push({name: "GatoSalaEspera", params: {code: response.data.code}});
    } catch (e) {
        alert(e.message)
    } finally {
        loading.value = false
    }
} 

function joinGameTo(){
    router.push('/gato-unirse-partida');
} 

</script>