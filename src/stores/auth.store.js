import { ref } from "vue";
import api from "../services/api.service";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {

    const user = ref(null);
    const token = ref(localStorage.getItem("token") || null);

    const login = async (email, password) => {
        // Necesario para generar cookies
        // await api.get('/sanctum/csrf-cookie', {withCredentials:true});

        const { data } = await api.post('/login', { email, password }, {withCredentials: true} );
        user.value = data.user;
        token.value = data.token;
        localStorage.setItem('token', data.token)
    }

    const logout = async () => {
        await api.post('/logout');
        user.value = null;
        token.value = null;
        localStorage.removeItem('token');
    }

    const getUser = async () => {
        const { data } = await api.get('/user');
        user.value = data;
    }

    return {
        user,
        token,
        login,
        logout,
        getUser
    }
}, {
    persist: true
})