import "./style.css";

import PrimeVue from "primevue/config";
import { setupCalendar } from "v-calendar";
import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

app.use(setupCalendar, {});
app.use(PrimeVue);
app.mount("#app");
