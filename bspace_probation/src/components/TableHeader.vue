<template>
    <thead>
        <tr class="text-caption poppins tableHeader">
            <th class="text-start">Item KPI</th>
            <th class="text-start">Weight</th>
            <th class="text-start">Target</th>
            <th class="text-start">Lead To KPI Direct</th>
            <th class="text-start">Action</th>
            <th class="text-start"> </th>
        </tr>
    </thead>
</template>

<script setup>
    import { Colors } from '../../../bspace_design_system/src/constants/constants.js'
</script>

<style scoped>
.tableHeader{
    background-color: v-bind('Colors.background') !important;
}
th{
    color: v-bind('Colors.primary') !important;
    font-weight: 600 !important;
    background-color: none;
}
</style>