import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/kids",
    name: "kids",
    component: () => import("../views/KidsList"),
  },
  {
    path: "/view/:id",
    name: "kid-view",
    component: () => import("../views/ViewKid"),
  },
  {
    path: "/edit/:id",
    name: "kid-edit",
    component: () => import("../views/EditKid"),
  },
  {
    path: "/add",
    name: "kid-add",
    component: () => import("../views/AddKid"),
  },
  {
    path: "/calcular",
    name: "Calculador",
    component: () => import("../views/Calculador"),
  },
  {
    path: "/about",
    name: "Info",
    component: () => import("../views/About"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
