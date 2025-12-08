<template>

    <div class="flex flex-col items-center justify-center max-w-4xl w-full h-[100vh] mx-auto">
        <form @submit.prevent="submit" class="flex flex-col gap-5 mb-5">
            <input type="email" v-model="email" class="border boder-black px-3 py-1 rounded w-[18rem]" placeholder="Email">
            <input type="password" v-model="password" class="border boder-black px-3 py-1 rounded w-[18rem]" placeholder="Contraseña">
            <button class="bg-black border border-black text-white font-medium px-4 py-1 rounded">Ingresar</button>
        </form>

        <p v-if="error" class="text-red-600 text-sm font-medium">{{ error }}</p>
    </div>

</template>

<script setup>
import {ref} from "vue"
import { useAuthStore } from "../../stores/auth.store";
// import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "vue-router"

const auth = useAuthStore();
const router = useRouter()
const email = ref("");
const password = ref("")
const error = ref("")

async function submit(){
    try{
        await auth.login(email.value, password.value);
        await auth.getUser();
        router.push("/gato-menu-multijugador");
    } catch (e) {
        error.value = e.message;
    }
}

</script>