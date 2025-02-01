<script setup>
import HeaderMenu from './components/HeaderMenu.vue';
import { RouterView } from 'vue-router';
import { ref, provide } from 'vue';

const state = ref({
  homepage: {
    propertySales: [
      { no: 1, title: 'Property Sales', desc: 'Find your dream home with Real Estate - our expert team will guide you through the process and ensure a smooth transaction.' },
      { no: 2, title: 'Property Rentals', desc: 'Find your dream rental property with Real Estate, offering a variety of options to suit your needs and preferences.' },
      { no: 3, title: 'Property Management', desc: 'Trust Real Estate to handle the day-to-day management of your property, maximizing its value and minimizing your stress.' },
      { no: 4, title: 'Lucrative Investments', desc: 'Real Estate presents lucrative investment opportunities in the real estate market, providing high returns on investments.' }

    ]
  }
});
provide('store', state.value);






</script>

<template>
  <HeaderMenu />
  <RouterView />
</template>
