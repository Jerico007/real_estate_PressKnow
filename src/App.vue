<script setup>
import HeaderMenu from './components/HeaderMenu.vue';

import { RouterView } from 'vue-router';
import { ref, provide } from 'vue';

// Image src
import feature_1 from "@/components/icons/feature-1.jpg";
import feature_2 from "@/components/icons/feature-2.jpg";
import feature_3 from "@/components/icons/feature-3.jpg";

const state = ref({
  homepage: {
    propertySales: [
      { no: 1, title: 'Property Sales', desc: 'Find your dream home with Real Estate - our expert team will guide you through the process and ensure a smooth transaction.' },
      { no: 2, title: 'Property Rentals', desc: 'Find your dream rental property with Real Estate, offering a variety of options to suit your needs and preferences.' },
      { no: 3, title: 'Property Management', desc: 'Trust Real Estate to handle the day-to-day management of your property, maximizing its value and minimizing your stress.' },
      { no: 4, title: 'Lucrative Investments', desc: 'Real Estate presents lucrative investment opportunities in the real estate market, providing high returns on investments.' }

    ],
    propertyFeatures: [
      { imageSrc: feature_1, toolTip: 'Apartment - kings', title: 'Modern Stylish Apartment', desc: 'Discover the epitome of contemporary living in our sleek and chic modern stylish apartments.', price: '150,000' },
      { imageSrc: feature_2, toolTip: 'Apartment - kings', title: 'Contemporary Apartments', desc: 'Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments.', price: '150,000' },
      { imageSrc: feature_3, toolTip: 'Apartment - kings', title: 'Suburban Single-Family Homes', desc: 'Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes.', price: '150,000' },
    ]
  }
});
provide('store', state.value);






</script>

<template>
  <HeaderMenu />
  <RouterView />
</template>
