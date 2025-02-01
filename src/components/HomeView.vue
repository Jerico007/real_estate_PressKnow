<script setup>
import { faL } from '@fortawesome/free-solid-svg-icons';
import PropertyServicesBox from './PropertyServicesBox.vue';
import { inject, onMounted, ref } from 'vue';

const state = inject('store');

const propertyData = state.homepage.propertySales;

const title1 = ref(null);

const title2 = ref(null);

const isTitle1Visible = ref(false);

const isTitle2Visible = ref(false);



const handleIntersect = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('hidden')) {
            isTitle1Visible.value = true;
        }

        if (entry.isIntersecting && entry.target.classList.contains('slide-now')) {
            isTitle2Visible.value = true;
        }
    });
}


onMounted(() => {
    const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0
    });


    observer.observe(title1.value);
    observer.observe(title2.value);
});
</script>

<template>
    <div class="home-image d-flex flex-column justify-content-center align-items-center">
        <p ref="title1" :class="['hidden', { 'show': isTitle1Visible }]"
            class=" fs-2 text-center align-middle fw-semibold title-para">Discover Your Dream Home with Us
        </p>
        <h1 :class="['hidden', { 'show': isTitle1Visible }]" class="text-center align-middle head-para">Find the Perfect
            Property for Your Lifestyle
        </h1>
    </div>
    <div class="home-middle-content text-center p-3">
        <h2 ref="title2" :class="['slide-now', { 'slide-right': isTitle2Visible }]">What We Do</h2>
        <p :class="['slide-now', { 'slide-right': isTitle2Visible }]" class="d-inline-block">Simplifying the journey of
            buying, selling, and renting properties. Our
            expert team
            provides comprehensive
            real estate solutions tailored to your needs</p>
        <div class="spacer m-3 mx-auto "></div>
        <div class="propertyservicebox-holder d-flex g-2  align-items-start flex-wrap flex-md-nowrap p-3">
            <PropertyServicesBox :class="['slide-now', { 'slide-right': isTitle2Visible }]" v-for="x in propertyData" :no="x.no" :title="x.title" :description="x.desc" />

        </div>
    </div>
</template>