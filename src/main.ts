import App from "@/App.vue";
import Vue from "vue";
import router from "./router";

Vue.config.productionTip = false;

// noinspection JSUnusedGlobalSymbols
new Vue({
    render: (h) => h(App),
    router
}).$mount("#app");
