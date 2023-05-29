<template>
    <v-text-field
        :class="searchInput"
        :loading="loading"
        density="compact"
        variant="solo"
        :label="label"
        class="w-20 ml-6 searchInput"
        single-line
        hide-details
    >
        <template v-slot:append-inner>
            <v-icon slot="append-inner" @click="onClick" :color="Colors.primary">
                mdi-magnify
            </v-icon>
        </template>
    </v-text-field>
</template>

<script setup>
    import { ref } from 'vue'
    import { Colors } from '../../constants/constants.js'

    defineProps({
        label: String
    })

    const loading = ref(false)
    const message = ref('')

    const onClick = () => {
        loading.value = true
        setTimeout(() => {
          loading.value = false
        }, 2000)
    }
</script>

<style>
    .searchInput .v-field{
        box-shadow: none !important;
        border: 1px solid #D8DFE8;
    }
</style>