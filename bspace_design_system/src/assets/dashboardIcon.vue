<template>
    <svg :width="size" :height="size" :viewBox="'0 0 ' + size + ' ' + size" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" d="M3.14099 12.6647C2.78379 10.7317 3.12746 8.73459 4.11028 7.03212C5.0931 5.32965 6.65068 4.03334 8.5033 3.37598V9.56881L3.14099 12.6647Z" :fill="stroke"/>
        <path d="M11.2534 11.1562V2.90625" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.3981 7.03125L4.10864 15.2812" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.14099 12.6647C2.78379 10.7317 3.12746 8.73459 4.11028 7.03212C5.0931 5.32965 6.65068 4.03334 8.5033 3.37598V9.56881L3.14099 12.6647Z" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.2534 2.90625C12.6988 2.90652 14.1187 3.28653 15.3711 4.00823C16.6234 4.72993 17.6642 5.768 18.3891 7.01847C19.1141 8.26894 19.4978 9.68792 19.5018 11.1333C19.5058 12.5787 19.13 13.9998 18.412 15.2543C17.694 16.5088 16.6591 17.5526 15.4107 18.2813C14.1624 19.0099 12.7446 19.3978 11.2992 19.4061C9.8538 19.4144 8.43159 19.0428 7.17499 18.3286C5.91839 17.6143 4.8715 16.5824 4.13916 15.3363" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script setup>
defineProps({
    size: Number,
    stroke: String
})
</script>