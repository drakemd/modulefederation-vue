<template>
    <div>
        <div class="w-100 pt-7 tabHeader">
            <div class="mx-6"><PageTitle title="My Probation" /></div>
            <div class="mt-4">
                <Tabs :items="items">
                    <v-window-item
                        v-for="item in items"
                        :key="item"
                        :value="item"
                    >
                        <v-container v-if="item !== 'Probation Appraisal'" fluid class="tabContent">
                            <div color="black">{{ item }}</div>
                        </v-container>
                        <v-container v-else fluid class="tabContent">
                            <ProbationAppraisal />
                        </v-container>
                    </v-window-item>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { Colors } from '../../bspace_design_system/src/constants/constants.js'
import PageTitle from '../../bspace_design_system/src/components/PageTitle/PageTitle'
import Tabs from '../../bspace_design_system/src/components/Tabs/Tabs'
import ProbationAppraisal from './views/ProbationAppraisal'

const items = ['Coaching', 'Probation Appraisal', 'Behaviour Survey', 'Achievment Final']
</script>

<style scoped>
.tabHeader{
    background-color: white;
}
.tabContent{
    background-color: v-bind('Colors.background');
}
</style>