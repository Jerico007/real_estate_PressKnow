<script setup>
import { ref } from 'vue';

import logo from "@/components/icons/logo.svg";


const menuState = ref({
    drawerStatus: false,
    listContent: ['Home', 'About', 'Services', 'Properties', 'Contact']
});

function toggleMenu() {
    menuState.value.drawerStatus = !menuState.value.drawerStatus;
}
</script>

<template>
    <div class="navbar container-fluid d-flex justify-content-between align-items-center p-2 ">
        <!-- App logo -->
        <div class="app-logo">
            <img :src="logo" id="nav-logo" alt="No Logo">
        </div>

        <!-- Menu items -->
        <div class="d-none d-md-flex justify-content-around g-2">
            <li v-for="x in menuState.listContent" class="menu-list mx-2">{{ x }}</li>
        </div>


        <!-- Navigation List (Slide from Right to Left) -->
        <ul :class="['list-content', { 'show-menu': menuState.drawerStatus }]">
            <li v-for="x in menuState.listContent" class="menu-list-phone mx-2">{{ x }}</li>
        </ul>

        <!-- Social media icons -->
        <div class="social-icon-holder d-none d-md-flex ">
            <font-awesome-icon class="nav-icons" :icon="['fab', 'twitter']" style="cursor: pointer;" />
            <font-awesome-icon class="nav-icons" :icon="['fab', 'pinterest']" style="cursor: pointer;" />
            <font-awesome-icon class="nav-icons" :icon="['fab', 'youtube']" style="cursor: pointer;" />
        </div>

        <!-- Button to Mobile responsiveness -->
        <button class="menu-toggle d-md-none" @click="toggleMenu">
            <font-awesome-icon v-show="!menuState.drawerStatus" class="hamburger" :icon="['fas', 'bars']" size="lg"  />
            <font-awesome-icon v-show="menuState.drawerStatus" class="hamburger" :icon="['fas', 'xmark']"  size="lg"/>
        </button>
        
    </div>
</template>