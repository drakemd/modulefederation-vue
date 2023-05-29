<template>
    <tr class="text-caption poppins">
        <td v-if="!item.edit">
            <div class="h-100 pt-3">
                <div>{{ item.kpi }}</div>
            </div>
        </td>
        <td v-else>
            <v-text-field
                class="text-caption poppins"
                v-model="newKpi"
                density="compact"
                variant="outlined"
                single-line
                hide-details
            ></v-text-field>
        </td>
        <td v-if="!item.edit"><div class="h-100 pt-3">{{ item.weight + '%' }}</div></td>
        <td v-else>
            <v-text-field
                v-model="newWeight"
                density="compact"
                variant="outlined"
                single-line
                hide-details
            ></v-text-field>
        </td>
        <td v-if="!item.edit"><div class="h-100 pt-3">{{ item.target + '%' }}</div></td>
        <td v-else>
            <v-text-field
                v-model="newTarget"
                density="compact"
                variant="outlined"
                single-line
                hide-details
            ></v-text-field>
        </td>
        <td v-if="!item.edit"><div class="h-100 pt-3">{{ item.leadTo }}</div></td>
        <td v-else>
            <v-text-field
                v-model="newLeadTo"
                density="compact"
                variant="outlined"
                single-line
                hide-details
            ></v-text-field>
        </td>
        <td class="d-flex align-center">
            <v-btn v-if="!item.edit" icon="mdi-pencil-outline" color="primary" rounded="lg" size="x-small" class="mr-1" @click="onClickEdit(item, index)"></v-btn>
            <v-btn v-else icon="mdi-content-save-outline" color="primary" rounded="lg" size="x-small" class="mr-1" @click="onClickSave(index)"></v-btn>
            <v-btn icon="mdi-trash-can-outline" color="error" rounded="lg" size="x-small" @click="store.deleteDataByKpi(item.kpi)"></v-btn>
        </td>
        <td v-if="!item.edit">
            <div class="h-100 pt-1">
                <v-btn :icon="!item.showDetail ? 'mdi-chevron-down' : 'mdi-chevron-up'" @click="store.toggleExpand(index)" variant="text" rounded="lg" size="small"></v-btn>
            </div>
        </td>
    </tr>
    <tr v-if="item.showDetail || item.edit">
        <td v-if="item.edit" class="mt-2 text-caption poppins" colspan="6">
            <VuetifyTiptap v-model="newNotes" label="Notes" rounded :min-height="200" :max-height="465" :max-width="600" />
        </td>
        <td v-else class="mt-2 text-caption poppins" colspan="6">
            <VuetifyViewer :value="item.notes" />
        </td>
    </tr>
</template>

<script setup>
    import { ref, watch } from 'vue'
    import { VuetifyTiptap } from 'vuetify-pro-tiptap'
    import { useProbationStore } from '../stores/ProbationStore.js'
    
    const props = defineProps({
        item: Object,
        index: Number
    })
    
    const newKpi = ref('')
    const newWeight = ref('')
    const newTarget = ref('')
    const newLeadTo = ref('')
    const newNotes = ref('')

    const store = useProbationStore()

    function onClickEdit(item, index) {
        newKpi.value = item.kpi
        newWeight.value = item.weight
        newTarget.value = item.target
        newLeadTo.value = item.leadTo
        newNotes.value = item.notes

        store.toggleEdit(index)
    }

    function onClickSave(index) {
        store.updateData(index, newKpi, newWeight, newTarget, newLeadTo, newNotes)
        store.toggleEdit(index)
    }

    watch(newNotes, (newContent, oldContent) => {
        console.log(newContent)
    })
</script>

<style>
div.vuetify-pro-tiptap-editor__content.view.markdown-body .content{
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    text-transform: none !important;
}

div.vuetify-pro-tiptap-editor__content.markdown-body .ProseMirror{
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    text-transform: none !important;
}

.v-text-field input{
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    text-transform: none !important;
    width: 80%;
}
th{
    white-space: nowrap;
}
td{
    white-space: nowrap;
}
</style>
