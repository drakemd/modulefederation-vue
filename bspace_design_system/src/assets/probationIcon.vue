<template>
    <svg :width="size" :height="size" :viewBox="'0 0 ' + size + ' ' + size" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5029 6.90625H4.00293C3.58872 6.90625 3.25293 7.24204 3.25293 7.65625V19.6562C3.25293 20.0705 3.58872 20.4062 4.00293 20.4062H20.5029C20.9171 20.4062 21.2529 20.0705 21.2529 19.6562V7.65625C21.2529 7.24204 20.9171 6.90625 20.5029 6.90625Z" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0029 6.90625V5.40625C16.0029 5.00843 15.8449 4.62689 15.5636 4.34559C15.2823 4.06429 14.9008 3.90625 14.5029 3.90625H10.0029C9.6051 3.90625 9.22357 4.06429 8.94227 4.34559C8.66097 4.62689 8.50293 5.00843 8.50293 5.40625V6.90625" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.25293 15.1562H21.2529" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script setup>
defineProps({
    size: Number,
    stroke: String
})
</script>