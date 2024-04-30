import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./styles/main.css";
import Chart from "./components/Chart.vue";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import ToggleButton from "primevue/togglebutton";
import InputText from "primevue/inputtext";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";

const app = createApp(App);

app.component("Chart", Chart);
app.component("InputNumber", InputNumber);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("ToggleButton", ToggleButton);
app.component("Toast", Toast);

app.use(router);
app.use(store);
app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");
