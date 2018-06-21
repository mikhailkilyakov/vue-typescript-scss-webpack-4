import Vue from "vue";
import AppComponent from "./components/app/AppComponent.vue";

function bootstrap(el: string) {
    return new Vue({
        el: el,
        components: {
            AppComponent
        },
        template: `<AppComponent></AppComponent>`
    });
}

bootstrap("#app");