<template>

    <div class="flex items-center justify-center h-[100vh]">
        <div class="flex flex-col items-center">
            <h1 class="text-4xl font-medium text-black mb-8">
                Jugando al Gato
            </h1>

            <div class="grid grid-cols-3 mb-8">
                <button v-for="(casilla, index) in board" :key="index"
                    @click="pullMove(index)" 
                    :class="['text-4xl font-medium border-2 border-black h-28 w-28 text-blue-600',
                            colors[index] ] ">
                     {{ casilla }}
                </button>
            </div>

            <div class="flex">
                <button @click="resetGame" 
                    class="text-xl border-2 border-blue-600 px-6 py-3 rounded text-blue-600 font-medium">
                    Resetear partida
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

const board = ref(["", "", "", "", "", "", "", "", ""])
const green = "text-green-600";
const blue = "text-blue-600";
const colors = ref(["", "", "", "", "", "", "", "", ""])
const turn = ref("X")

onMounted(() => {
    console.log('INICIO JUEGO')
})

function pullMove(index){
    // Verificamos que la casilla no ste ocupada
    if (board.value[index] !== ''){
        alert('Casilla ocupada') 
        return
    } 

    // Asignamos el valor a la casilla
    board.value[index] = turn.value;

    // Cambiamos el turno
    turn.value = turn.value === "X" ? "O" : "X";

    // Asginamos color
    colors.value[index] = turn.value === "X" ? green : blue; 

    // Verificamos el ganador
    const ganador = checkWinner(board.value)
    if (ganador !== false) {
        alert(`Gano ${ganador}`)
    }
}

function resetGame(){
    board.value = ["", "", "", "", "", "", "", "", ""]
    colors.value = ["", "", "", "", "", "", "", "", ""]
    turn.value = "X"
}

function checkWinner(b){
    const winners = [
        [0,1,2], [0,4,8], [0,3,6], 
        [1,4,7], 
        [2,4,5], [2,5,8],
        [3,4,5], [6,7,8]
    ]
    for(let w of winners){
        if (b[w[0]] !== '' && b[w[0]] === b[w[1]] && b[w[1]] === b[w[2]]) {
            return b[w[0]];
        }
    }

    return false;
}

</script>