<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    no: Number,
    title: String,
    description: String
})
</script>

<template>
    <div class="property-desc text-start ">
        <p>{{ props.no < 10 ? 0 : '' }}{{ props.no }}</p>
                <p>{{ props.title }}</p>
                <p>{{ props.description }}</p>
    </div>

</template>