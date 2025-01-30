
import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (Optional, for components like modals, tooltips, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/main.css'
// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import specific icons
import { faUser, faHome, faBars ,faXmark} from '@fortawesome/free-solid-svg-icons';

import { faTwitter, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
// Import FontAwesome Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(faUser, faHome, faTwitter, faPinterest, faYoutube, faBars,faXmark);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon); // Register component globally

app.mount('#app')
