<template>
    <v-tabs
        v-model="tab"
        align-tabs="title"
    >
        <v-tab
            v-for="item in items"
            :key="item"
            :value="item"
            class="tabItem"
            variant="text"
            :color="color"
        >
            <span class="text-body-2 poppins font-weight-medium">{{ item }}</span>
        </v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <slot></slot>
    </v-window>
</template>

<script setup>
    import { ref } from 'vue'
    import { Colors } from '../../constants/constants.js'

    const props = defineProps({
        items: Array,
        color: String
    })

    const tab = ref(null)
</script>

<style scoped>
.tabItem{
    color: v-bind('Colors.textActive');
    text-transform: none;
}
</style>