import Vue from "vue";
import Vuex from "vuex";
import App from "./components/app/app.vue";
import "./index.scss";

new Vue({
    el: "#app",
    template: `
    <App/>
    `,
    components: {
        App
    }
});
