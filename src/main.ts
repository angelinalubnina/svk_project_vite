import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVueComponents from './components/PrimeVueComponents';
// import UserComponents from './components/UI';
import PrimeVue from 'primevue/config';
import routes from './routes/routes';
import { MotionPlugin } from '@vueuse/motion'

import "./assets/theme1.css";

import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App)

PrimeVueComponents.forEach(comp => {
    app.component(comp.name, comp)
})

app.use(MotionPlugin)

// UserComponents.forEach(comp => {
//     app.component(comp.name, comp)
// })

app
    .use(routes)
    .use(PrimeVue)
    .mount('#app')
