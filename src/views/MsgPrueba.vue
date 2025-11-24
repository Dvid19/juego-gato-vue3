<template>

    <div class="flex flex-col items-start justify-between min-h-[100vh] max-w-2xl mx-auto">

        <!-- Mensajes -->
        <div class="flex flex-col w-full mt-6 mb-4">
            <div v-for="mensaje in msgsFormat" :class="mensaje.userId === myId ? 'ms-auto' : ''">
                <div :class="['inline-block rounded-md mb-2 p-2', mensaje.userId === myId ? 'bg-blue-600' : 'bg-gray-600']">
                    <div class="flex items-center gap-3">
                        <p class="text-white font-medium"> {{ mensaje.msg }}</p>
                        <span class="text-gray-300 text-xs"> {{ mensaje.dateFormat }} </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Enviar mensaje -->
        <div class="flex w-full gap-2 mb-6">
            <input type="text" placeholder="Ingresa mensaje" class="w-128 border-2 border-blue-600 rounded-lg py-2 px-4"></input>
            <button class="flex-grow bg-blue-600 text-white px-4 py-2 rounded-lg border-2 border-blue-600">Enviar</button>
        </div>

    </div>

</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import echo from "../resources/echo.js"
import { prueba } from "../services/chatService.js"

const myId = ref(1)

const msg = ref("")
const msgs = ref([
    {userId:2, msg:"Hola", date:"2025-12-01 12:01:12"}, 
    {userId:2, msg:"Señora", date:"2025-12-01 12:02:12"}, 
    {userId:2, msg:"Señito", date:"2025-12-01 12:02:12"}, 
    {userId:1, msg:"Hija de su putisima perra madre", date:"2025-12-01 12:29:12"},
    {userId:2, msg:"Oiga porque tan grosero joven", date:"2025-12-01 12:30:12"}
])

const msgsFormat = computed(() => {
    const msgsF = msgs.value.map(function(m) {
        return {
            ...m,
            dateFormat: getHoraFormato(m.date)
        }
    })
    return msgsF
})

onMounted(() => {
    echo.channel('chat').listen('Mensaje', (e) => {
        console.log("DATA DEL WEBSOCKET RECIBIDA: ", e)
    })

    pruebaGet()
    
})

function getHoraFormato(f){
    const fecha = new Date(f)
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();

    const ampm = horas >= 12 ? 'pm' : 'am'

    horas = horas % 12;
    horas = horas ? horas : 12

    horas = horas < 10 ? `0${horas}` : horas
    minutos = minutos < 10 ? `0${minutos}` : minutos
    
    return `${horas}:${minutos} ${ampm}`
}

async function pruebaGet(){
    try{
        const response = await prueba()
        console.log(response.data)
    } catch (e) {
        console.log(e.message)
    }
}

</script>