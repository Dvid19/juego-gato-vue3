<template>

    <div class="flex flex-col items-center justify-center h-[100vh] max-w-2xl mx-auto">

        <p class="text-2xl font-bold text-center mb-8">
            Ingresa el codigo para unirte a la partida
        </p>

        <form @submit.prevent="join"
            class="flex flex-col gap-3"
        >
            <input type="text" v-model="code" placeholder="Codigo de partida" class="min-w-xs border-2 py-2 px-4 rounded-md text-center"
                @input="convertirMayus">
            <button class="bg-black text-white font-medium py-2 px-4 rounded-md border-2 transition duration-200 ease-in-out hover:bg-gray-600">
                Ingresar
            </button>
        </form>

    </div>

</template>


<script setup>
import { ref } from 'vue'
import echo from "../../resources/echo";
import { joinGameGato } from '../../services/GameGato/gato.service';

const code = ref('');

onMounted(() => {

})

async function join(){
    if(!code.value) return

    try {
        const response = await joinGameGato(code.value);
        console.log(response)
    } catch (e) {
        alert(e.message);
    }
}

// Escuchar WebSocket
function listenToChannel(gameId) {
  console.log('Conectadonos a la partida de Gato..')
  echo.join(`game.${conversationId}`).listen("GameJoined", (e) => {
    console.log("data de reverb: ", e);
  });
}

function convertirMayus(){
    code.value = code.value.toUpperCase();
}

</script>