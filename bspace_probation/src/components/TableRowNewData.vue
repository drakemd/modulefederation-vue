<template>
    <tr class="text-caption poppins">
        <td>
            <v-text-field
                id="newKPI"
                v-model="newKPI"
                density="compact"
                variant="outlined"
                single-line
                hide-details
            ></v-text-field>
        </td>
        <td>
            <v-text-field
                id="newWeight"
                v-model="newWeight"
                density="compact"
                variant="outlined"
                single-line
                hide-details
            ></v-text-field>
        </td>
        <td>
            <v-text-field
                id="newTarget"
                v-model="newTarget"
                density="compact"
                variant="outlined"
                single-line
                hide-details
            ></v-text-field>
        </td>
        <td>
            <v-text-field
                id="newLeadTo"
                v-model="newLeadTo"
                density="compact"
                variant="outlined"
                single-line
                hide-details
            ></v-text-field>
        </td>
        <td class="d-flex align-center">
            <v-btn id="saveNewData" icon="mdi-content-save-outline" color="primary" rounded="lg" size="x-small" @click="saveNewData" class="mr-1"></v-btn>
            <v-btn icon="mdi-trash-can-outline" color="error" rounded="lg" size="x-small" @click="toggleNewData"></v-btn>
        </td>
    </tr>
    <tr>
        <td class="mt-2 text-caption poppins" colspan="6">
            <VuetifyTiptap id="newNotes" v-model="newNotes" label="Notes" rounded :min-height="200" :max-height="465" :max-width="600" />
        </td>
    </tr>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { VuetifyTiptap } from 'vuetify-pro-tiptap'
import { useProbationStore } from '../stores/ProbationStore.js'

const props = defineProps({
    onHide: Function,
})

const store = useProbationStore()

const newKPI = ref('')
const newWeight = ref('')
const newTarget = ref('')
const newLeadTo = ref('')
const newNotes = ref('')

function toggleNewData() {
    props.onHide()
    newKPI.value = ''
    newWeight.value = ''
    newTarget.value = ''
    newLeadTo.value = ''
    newNotes.value = ''
}

function saveNewData() {
    store.addNewData(newKPI.value, newWeight.value, newTarget.value, newLeadTo.value, newNotes.value)
    toggleNewData()
}
</script>