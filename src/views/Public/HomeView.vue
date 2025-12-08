<template>

    <div class="max-w-6xl p-6 mx-auto flex items-center justify-center gap-5 h-[80dvh] mb-12">
    
        <div class="">
            <h1 class="text-7xl font-black mb-12">
                Juega y
                Diviertete.
            </h1>
            <p class="text-xl font-aguafina mb-6">
                Que gane el mejor, o mejor dicho; el más inteligente.
                El juego del gato es uno de los más exigentes a nivel intelectual... estas preparado o tienes miedo ?
            </p>
            <div class="flex gap-5">
                <button class="px-9 py-3.5 rounded-md cursor-pointer text-xl tracking-wider font-medium border-0 outline-0 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-2xl">
                    Jugar local
                </button>
                <button class="px-9 py-3.5 cursor-pointer text-xl tracking-wider font-medium border-0 outline-0 text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-md">
                    Jugar online
                </button>
            </div>
        </div>

        <div class="">
            <img src="../../assets/gaming-38.png" alt="">
        </div>
        
    </div>


    <div class="max-w-6xl p-6 mx-auto flex flex-col items-center justify-center gap-5  mb-12">

        <div class="max-w-2xl flex flex-col items-center justify-center">
            <h1 class="text-5xl font-black mb-6">
                Las Reglas son Muy Faciles
            </h1>
            <div class="max-w-xl w-full h-[2px] bg-blue-600 mb-6"></div>
            <p class="text-xl text-center font-aguafina mb-6">
                Para jugar al juego del gato no necesitas ser un ingeniero profesional.
            </p>
        </div>

        <div class="grid grid-cols-12 gap-6">

            <div class="relative w-full min-h-[350px] col-span-7">
                <iframe 
                    class="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/opJU7-u50Lw?si=TwT4s7s5tbgD39fg" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>

            <div class="col-span-5">
                
                <div>
                    <h2 class="text-2xl font-bold mb-2">Cualquiera puede</h2>
                    <p class="mb-6">Solo necesitas tener una pizca de logíca y sentido común, 
                    en escencia solo es <span class="font-medium">marcar 3 elementos en una cuadricula de 3*3 y listo</span>, pero decir eso es ambiguo, por eso prepare un video muy bonito.</p>
                </div>


                <div class="grid grid-cols-2 gap-5">
                    <div class="flex gap-3 items-center">
                        <div class="w-4 h-4 shrink-0 rounded-full bg-blue-600"></div>
                        <p class="font-medium">No Necesitas Fluidez Mental</p>
                    </div>
                    <div class="flex gap-3 items-center">
                        <div class="w-4 h-4 shrink-0 rounded-full bg-blue-600"></div>
                        <p class="font-medium">No Ocupas Agilidad intelectual</p>
                    </div>
                    <div class="flex gap-3 items-center">
                        <div class="w-4 h-4 shrink-0 rounded-full bg-blue-600"></div>
                        <p class="font-medium">No Hace Falta Calculo Rapido</p>
                    </div>
                    <div class="flex gap-3 items-center">
                        <div class="w-4 h-4 shrink-0 rounded-full bg-blue-600"></div>
                        <p class="font-medium">No Usaras Resiliciencia Interna</p>
                    </div>
                </div>

            </div>

        </div>

    </div>


</template>

<script setup>

</script>