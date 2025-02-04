<script setup>

const props = defineProps({
    imageurl: String,
    tooltip: String,
    title: String,
    desc: String,
    price: String,
    scale: Boolean,
})
</script>


<template>
    <div class="property-interior text-start">
        <img :src="imageurl" :class="['img-scale-initial', { 'img-scale-now': scale }]">
        <p>{{ tooltip }}</p>
        <p>{{ title }}</p>
        <p>{{ desc }}</p>
        <span>${{ price }}</span>
    </div>
</template>
