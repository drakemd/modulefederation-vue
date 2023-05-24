<script setup>
import { ref } from 'vue'
import MyButton from '../../bspace_design_system/src/components/Button/ButtonVtf'
import MyHeader from '../../bspace_design_system/src/components/Header/Header'

const user = ref({
    name: 'Shinta Dewi Puspita S.'
})
</script>

<template>
    <v-app>
        <MyHeader :user="user" />
        <v-main>
            <router-view />
            <!-- <div class="layout-app"> -->
                <!-- host app HOST-->
                <!-- <div class="app-label"># Hosting App [HOST]</div>
                <img src="./logo.png" width="30" />
                <h1>Layout App 1</h1>
                <MyButton label="Mantul" primary="true" />
                <div class="remote-component"> -->
                    <!-- remote-component REMOTE -->
                    <!-- <div class="app-label">#remote-component [REMOTE]</div>
                    <content-element />
                    <button-element />
                </div>
            </div> -->
        </v-main>
    </v-app>
    
</template>
