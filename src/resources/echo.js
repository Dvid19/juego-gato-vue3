import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

console.log("App key: ", import.meta.env.VITE_REVERB_APP_KEY)
console.log("Host: ", import.meta.env.VITE_REVERB_HOST)
console.log("Port: ", import.meta.env.VITE_REVERB_PORT)
console.log("Token de verificación: ", localStorage.getItem('token'))

const echo = new Echo({ 
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST || window.location.hostname,
    wsPort: import.meta.env.VITE_REVERB_PORT || 8080,
    wssPort: import.meta.env.VITE_REVERB_PORT || 8080,
    enabledTransports: ['ws', 'wss'],
    authEndpoint: "http://localhost/juego-gato/public/api/broadcasting/auth", // Endpoint de autenticación
    auth: {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    },
    forceTLS: false
});

export default echo;