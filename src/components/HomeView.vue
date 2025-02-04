<script setup>
import PropertyServicesBox from './Home Page Components/PropertyServicesBox.vue';
import PropertyInteriorView from './Home Page Components/PropertyInteriorView.vue';
import { inject, onMounted, ref } from 'vue';

const state = inject('store');

const propertyData = state.homepage.propertySales;

const propertyInterior = state.homepage.propertyFeatures;

const title1 = ref(null);

const title2 = ref(null);

const title3 = ref(null);

const title4 = ref(null);

const isTitle1Visible = ref(false);

const isTitle2Visible = ref(false);

const isTitle3Visible = ref(false);

const isImgVisible = ref(false);




const handleIntersect = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('hidden')) {
            isTitle1Visible.value = true;
        }

        if (entry.isIntersecting && entry.target.classList.contains('slide-right-now')) {
            isTitle2Visible.value = true;
        }


        if (entry.isIntersecting && entry.target.classList.contains('slide-left-now')) {
            isTitle3Visible.value = true;
        }



        if (entry.isIntersecting && entry.target.classList.contains('property-interior-holder')) {
            isImgVisible.value = true;
        }
    });
}


onMounted(() => {
    const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0
    });


    observer.observe(title1.value);
    observer.observe(title2.value);
    observer.observe(title3.value);
    observer.observe(title4.value);

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
        <h2 ref="title2" :class="['slide-right-now', { 'slide-right': isTitle2Visible }]">What We Do</h2>
        <p :class="['slide-right-now', { 'slide-right': isTitle2Visible }]" class="d-inline-block">Simplifying the
            journey of
            buying, selling, and renting properties. Our
            expert team
            provides comprehensive
            real estate solutions tailored to your needs</p>
        <div class="spacer m-3 mx-auto "></div>
        <div class="propertyservicebox-holder d-flex g-2  align-items-start flex-wrap flex-md-nowrap p-3">
            <PropertyServicesBox :class="['slide-right-now', { 'slide-right': isTitle2Visible }]"
                v-for="x in propertyData" :no="x.no" :title="x.title" :description="x.desc" />

        </div>
    </div>
    <div class="p-3">
        <div class="feature-holder">
            <div class="home-feature-properties text-center p-3">
                <h2 ref="title3" :class="['slide-left-now', { 'slide-left': isTitle3Visible }]">Featured Properties</h2>
                <p class="d-inline-block" :class="['slide-left-now', { 'slide-left': isTitle3Visible }]">Discover our
                    hand-picked selection of top-notch properties with outstanding
                    features, guaranteed to meet your real estate needs and exceed your expectations.</p>
                <div class="spacer m-3 mx-auto "></div>
                <div ref="title4" class="container-fluid property-interior-holder d-flex  flex-wrap flex-md-nowrap justify-content-center align-self-center mt-5">
                    <PropertyInteriorView v-for="x in propertyInterior" :imageurl="x.imageSrc" :tooltip="x.toolTip"
                        :title="x.title" :desc="x.desc" :price="x.price" :scale="isImgVisible"  />
                </div>
            </div>
        </div>
    </div>
</template>