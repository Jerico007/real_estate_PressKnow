import { createRouter, createMemoryHistory } from "vue-router";


import HomeView from "@/components/HomeView.vue";

import AboutView from "@/components/AboutView.vue";

import ServiceView from "@/components/ServiceView.vue";

import ContactsView from "@/components/ContactsView.vue";

import PropertiesView from "@/components/PropertiesView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
    { path: "/services", component: ServiceView },
    { path: "/properties", component: PropertiesView },
    { path: "/contact", component: ContactsView }

]


const router = createRouter({
    history: createMemoryHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass:'active'
})

export default router;