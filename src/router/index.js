import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Product from "../views/Product.vue";
// import Orders from "../views/Orders.vue";
// import Basket from "../views/Basket.vue";
// import Composable from "../views/Composable.vue";
import Task from "../views/Task.vue";
import About from "../views/About.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/task",
        name: "Task",
        component: Task
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router