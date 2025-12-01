import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

console.log("App key: ", import.meta.env.VITE_REVERB_APP_KEY)
console.log("Host: ", import.meta.env.VITE_REVERB_HOST)
console.log("Port: ", import.meta.env.VITE_REVERB_PORT)

const echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST || window.location.hostname,
    wsPort: import.meta.env.VITE_REVERB_PORT || 8080,
    wssPort: import.meta.env.VITE_REVERB_PORT || 8080,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
    authEndpoint: "http://localhost/juego-gato/public/broadcasting/auth",

    // auth: {
    //     headers: {
    //         'X-Requested-With': 'XMLHttpRequest',
    //     }
    // },

    withCredentials: true,
});

export default echo;