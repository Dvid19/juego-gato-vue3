<template>

    <!-- Hero  -->
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
            <img src="/gaming-38.png" alt="">
        </div>
        
    </div>


    <!-- Como se juega -->
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

            <div class="relative w-full h-[350px] col-span-7">
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
                    <h2 class="text-blue-600 text-2xl font-bold mb-2">Cualquiera puede</h2>
                    <p class="mb-6">Solo necesitas tener una pizca de logíca y sentido común, 
                    en escencia solo es <span class="font-medium">marcar 3 elementos en una cuadricula de 3*3 y listo</span>, pero decir eso es ambiguo, por eso prepare un video muy bonito.</p>
                </div>


                <div class="grid grid-cols-2 gap-5 mb-12">
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

                <button type="button"
                    class="px-7 py-3 rounded-full cursor-pointer text-blue-600 text-base tracking-wider font-medium border-2 border-blue-600 outline-0 bg-transparent hover:bg-gray-50">
                    Jugar ahora
                </button>

            </div>

        </div>

    </div>


    <!-- Produce felicidad -->
    <div class="max-w-6xl p-6 mx-auto min-h-[80dvh] h-[80dvh] mb-12"> 

        <div class="relative bg-[url('/boy-feliz.jpg')] bg-fixed bg-cover bg-center h-full flex items-center justify-center rounded-lg">

            <div class="rounded-lg absolute inset-0 bg-black/50"></div>

            <div class="">
                <p class="relative text-white text-4xl font-bold">Solo es <span class="text-blue-500">estrategia</span></p>
            </div>            

        </div>

    </div>


    <!-- Carrusel de beneficios -->
    <div class="max-w-6xl p-6 mx-auto mb-12">

        <h2 class="text-4xl font-bold mb-4">
            La Gente que Si Sabe Jugar al Gato Opina
        </h2>

        <div class="h-[2px] w-[35%] bg-blue-600 mb-6"></div>

        <Carousel v-bind="carouselConfig">
            <Slide v-for="item in carouselImgs" :key="id">
                <div class="p-6 bg-blue-100 rounded">
                    <img :src="item.img" alt="" class="mb-6">
                    <p class="text-gray-800 text-2xl font-bold mb-3"> {{ item.name }} </p>
                    <p class="text-gray-800 text-lg font-base"> {{ item.testimonial }} </p>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>


</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted } from 'vue'

const carouselConfig = {
    autoplay: 2000,
    itemsToShow: 3,
    gap: 24,
    wrapAround: true
}

const carouselImgs = [
    {
        id: 1, img: '/chica-sonriendo-1.jpg', name: 'María Delgado Sanchez', testimonial: 'Wow, la verdad es que juga al juego del gato es una experiencia realemnte genial, me ayudo bastante, siente que ya tengo más agilidad mental.'
    },
    {
        id: 2, img: '/joven-feliz-1.jpg', name: 'María Delgado Sanchez', testimonial: 'Wow, la verdad es que juga al juego del gato es una experiencia realemnte genial, me ayudo bastante, siente que ya tengo más agilidad mental.'
    },
    {
        id: 3, img: '/señora-feliz-1.jpg', name: 'María Delgado Sanchez', testimonial: 'Wow, la verdad es que juga al juego del gato es una experiencia realemnte genial, me ayudo bastante, siente que ya tengo más agilidad mental.'
    },
    {
        id: 4, img: '/señor-feliz-1.png', name: 'María Delgado Sanchez', testimonial: 'Wow, la verdad es que juga al juego del gato es una experiencia realemnte genial, me ayudo bastante, siente que ya tengo más agilidad mental.'
    }
]

onMounted(() => {
    let arreglo = [];
    for (let i = 1; i <= 10; i++) {
        arreglo.push(i)
    }
    console.log('hola q haces...')
    console.log(arreglo)
});


</script>