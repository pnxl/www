import "@/assets/styles/tailwind.css";
import "@/assets/styles/font.css";
import "@/assets/styles/global.css";
import "@/assets/styles/custom.css";

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import { MotionPlugin } from "@vueuse/motion";

import App from "./App.vue";
import routes from "virtual:generated-pages";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(MotionPlugin).mount("#app");
