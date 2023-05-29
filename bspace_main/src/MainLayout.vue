<script setup>
import { ref } from 'vue'
import MyHeader from '../../bspace_design_system/src/components/Header/Header'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const user = ref({
    name: 'Shinta Dewi Puspita S.'
})
</script>

<template>
    <v-app>
        <MyHeader :user="user" :route="route" :router="router" />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
    
</template>
