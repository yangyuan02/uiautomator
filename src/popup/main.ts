import Vue from "vue";
import App from "./app.vue";
import router from "./router/index";
new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
