<template>
    <div class="text-h6 pl-3 title poppins">
        {{ title }}
    </div>
</template>

<script setup>
import { Colors } from '../../../../bspace_design_system/src/constants/constants.js'

defineProps({
    title: String
})
</script>

<style scoped>
.title{
    font-weight: 600 !important;
    border-left: solid 5px v-bind('Colors.secondary');
    line-height: 1;
}
</style>