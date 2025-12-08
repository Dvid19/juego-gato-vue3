<template>

    <div class="flex flex-col items-center justify-center h-[100vh]">
        <div class="flex flex-col items-center">
            <h1 class="text-4xl font-medium text-black mb-8">
                Jugando al Gato
            </h1>

            <div class="border border-black p-3 rounded-md mb-6">
                <p class="font-semibold text-lg">
                    Turno: <span :class="turn === 'X' ? 'text-blue-600' : 'text-green-600'"> {{ turn }} </span> 
                </p>
            </div>

            <div class="grid grid-cols-3 mb-8">
                <button v-for="(casilla, index) in board" :key="index"
                    @click="move(index)" 
                    :class="['text-4xl font-medium border-2 border-black h-28 w-28 text-blue-600',
                            colors[index] ] ">
                     {{ casilla }}
                </button>
            </div>
        </div>

        <!-- Modal de ganador -->
        <div v-if="isDraw || winner" class="flex flex-col items-center w-max-2xl px-12 py-8 rounded-lg bg-black">
            <p class="text-xl font-base text-white mb-6">
                {{ msgFinal }}
            </p>
            <div class="flex gap-5">
                <!-- <button @click="restart" 
                    class="text-normal border-2 border-white px-6 py-3 rounded text-white font-medium">
                    Reiniciar partida
                </button> -->
                <button @click="endGame" 
                    class="text-normal border-2 border-white px-6 py-3 rounded text-white font-medium">
                    Finalizar
                </button>
            </div>
        </div>

    </div>

    

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '../../router';
import { game, moveMade, restartGame } from '../../services/GameGato/gato.service';
import { useAuthStore } from '../../stores/auth.store'
import { alertBase } from '../../resources/sweetalert';
import echo from '../../resources/echo';

const auth = useAuthStore();

const route = useRoute();
const gameCode = route.params.code;

const board = ref(["", "", "", "", "", "", "", "", ""])
const green = "text-green-600";
const blue = "text-blue-600";
const colors = ref(["", "", "", "", "", "", "", "", ""])
const turn = ref("X")
const winner = ref(null)
const isDraw = ref(false)
const playerO = ref(0)
const playerX = ref(0)
const msgFinal = ref("")

onMounted(() => {
    console.log('INICIO JUEGO')
    getGame()
    listenToChannel(gameCode)
})


//#region Multijugador

async function getGame(){
    try{
        const response = await game(gameCode);
        console.log(response.data)
        setDataGame(response.data)
    } catch (e) {
        alert(e.message)
    }
}

// Escuchar WebSocket
function listenToChannel(gameCode){
  echo.join(`game.${gameCode}`).listen("MoveMade", (e) => {
    setDataGame(e.game)
  });
}

// Settear data de la partida
function setDataGame(data){
    board.value = data.board
    turn.value = data.turn
    winner.value = data.winner
    isDraw.value = data.is_draw
    playerO.value = data.player_o
    playerX.value = data.player_x

    // Asignamos color
    for (let i = 0; i <= board.value.length; i++) {
        let ficha = board.value[i];
        if (ficha && ficha == 'X') {
            colors.value[i] = blue
        } else if (ficha && ficha == 'O') {
            colors.value[i] = green
        }
        
    }

    // Mensaje final de partida finalizada
    msgFinal.value = resFinal();
}

// Movimiento de jugada
async function move(index){

    // Verificamos si ya existe ganador
    if (winner || isDraw) {
        alertBase("Partida finalizada.");
        return;
    }

    // Verificamos la casilla desocupada
    if (board.value[index] !== '') {
        alertBase("Casilla ocupada.");
        return;
    } 

    // Verificamos que sea el turno del jugador
    if (turn.value == 'X' && playerX.value !== auth.user.id || 
        turn.value == 'O' && playerO.value !== auth.user.id ) {
        alertBase("No es tu turno.");
        return;
    }

    try{
        const response = await moveMade(gameCode, index);
        setDataGame(response.data)
    } catch (e) {
        alert(e.message);
    }
} 

// Restart game
async function restart(){
    try{
        const response = await restartGame(gameCode);
        setDataGame(response.data);
    } catch (e) {
        alert(e.message)
    }
}

async function endGame(){
    router.push('/gato-menu-multijugador');
}

//#endregion end Multijugador

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
        return `La partida queda en empate.`
    }
}

</script>