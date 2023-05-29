<template>
    <v-btn 
        :class="(dark ? 'darkText' : '') + ' defaultButton poppins'"
        :variant="variant"
        :size="size"
        :color="color"
        :prepend-icon="prependIcon"
        :append-icon="appendIcon"
        :icon="icon"
        :rounded="rounded"
        :density="density"
        @click="onClick">{{ label }}</v-btn>
</template>

<script setup>
defineProps({
    label: String,
    variant: {
        type: String,
        validator: function (value) {
            return ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'].indexOf(value) !== -1
        },
    },
    size: {
        type: String,
        validator: function (value) {
            return ['x-small', 'small', 'default', 'large', 'x-large'].indexOf(value) !== -1
        },
    },
    color: String,
    dark: Boolean,
    prependIcon: String,
    appendIcon: String,
    icon: String,
    rounded: {
        type: String,
        validator: function (value) {
            return ['0', 'xs', 'sm', 'default', 'lg', 'xl'].indexOf(value) !== -1
        },
    },
    density: {
        type: String,
        validator: function (value) {
            return ['compact', 'default', 'comfortable'].indexOf(value) !== -1
        },
    },
    onClick: Function
})
</script>

<style scoped>
.darkText{
    color: white !important;
}
.defaultButton{
    box-shadow: none;
    text-transform: none;
    font-size: 0.75rem;
}
</style>