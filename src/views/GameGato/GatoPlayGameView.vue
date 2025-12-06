<template>

    <div class="flex items-center justify-center h-[100vh] relative">
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
        </div>

        <!-- Modal de ganador -->
        <div v-if="winner || isDraw" class="flex flex-col absolute items-center w-max-2xl px-12 py-8 rounded-lg bg-black">
            <p class="text-xl font-base text-white mb-6">
                {{ msgFinal }}
            </p>
            <div class="flex">
                <button @click="resetGame" 
                    class="text-normal border-2 border-blue-600 px-6 py-3 rounded text-blue-600 font-medium">
                    Reiniciar partida
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
const winner = ref(null)
const isDraw = ref(false)
const msgFinal = ref("")

onMounted(() => {
    console.log('INICIO JUEGO')
})

function pullMove(index){
    // Verificamos que no haya ganador ahun 
    if (winner.value) return

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
    if (ganador) {
        setTimeout(() => {
            winner.value = ganador
            msgFinal.value = resFinal()
        }, 1000)
    }

    // Verificamos si fue empate
    if (!ganador && !board.value.includes('')){
        setTimeout(() => {
            isDraw.value = true
            msgFinal.value = resFinal()
        }, 1000)
    }

}

function resetGame(){
    board.value = ["", "", "", "", "", "", "", "", ""]
    colors.value = ["", "", "", "", "", "", "", "", ""]
    turn.value = "X"
    winner.value = null
    isDraw.value = false
}

function checkWinner(b){
    const winners = [
        [0,1,2], [0,4,8], [0,3,6], 
        [1,4,7], 
        [2,4,6], [2,5,8],
        [3,4,5], [6,7,8]
    ]
    for(let w of winners){
        if (b[w[0]] !== '' && b[w[0]] === b[w[1]] && b[w[1]] === b[w[2]]) {
            return b[w[0]];
        }
    }

    return null;
}

const resFinal = () => {
    if (winner.value) {
        return `Genial, el ganador es: ${winner.value}`
    }

    if (isDraw.value) {
        return `La partida queda en empate !!!`
    }
}

</script>