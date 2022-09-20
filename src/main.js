import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { plugin, defaultConfig } from "@formkit/vue";

import "bulma/css/bulma.css";
import "bulma-list/css/bulma-list.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./registerServiceWorker";

const app = createApp(App);
app.use(router);
app.use(
  plugin,
  defaultConfig({
    config: {
      classes: {
        input: "input",
        button: "button is primary",
        label: "label",
        outer: "field",
        wrapper: "control",
        help: "help",
      },
    },
  })
);
app.mount("#app");
