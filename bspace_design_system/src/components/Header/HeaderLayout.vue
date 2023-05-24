<script setup>
import MyHeader from './Header'
defineProps({
    user: Object
})
</script>

<template>
    <v-app>
        <MyHeader :user="user" />    
    </v-app>
</template>