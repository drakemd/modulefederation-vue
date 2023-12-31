<template>
    <div class="d-flex flex-row">
        <div class="flex-1-0">
            <div>
                <span class="text-caption poppins font-weight-bold">Tanggal Mulai Probation:</span> 
                <span class="text-caption poppins"> 1 Maret 2023</span>
            </div>
            <div>
                <span class="text-caption poppins font-weight-bold">Nama Atasan:</span> 
                <span class="text-caption poppins"> Liani Susanto</span>
            </div>
        </div>
        <v-btn 
            variant="tonal"
            color="primary"
            size="x-small"
            class="probationBadge"
            rounded="xl"
        >IPD Probation Employee</v-btn>
    </div>
    <v-divider class="my-5"></v-divider>
    <div class="d-flex flex-row">
        <div class="flex-1-0">
            <span class="text-caption poppins font-weight-bold">Probation List</span>
        </div>
        <Button
            prepend-icon="mdi-plus"
            color="secondary"
            size="small"
            @click="toggleNewRow"
            label="Add KPI"
            dark="true"
        />
    </div>
    <template v-if="!isLoading">
        <v-table class="mt-3">
            <TableHeader />
            <tbody>
                <template v-for="(item, index) in list" :key="item.kpi">
                    <TableRow :item="item" :index="index" />
                </template>
                <template v-if="newData">
                    <TableRowNewData :onHide="toggleNewRow" />
                </template>
            </tbody>
        </v-table>
    </template>
    <template v-else>
        <div class="w-100 d-flex align-center justify-center">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>
    </template>
    <v-divider class="my-3"></v-divider>
    <div class="w-100 px-6 py-6 attachmentContainer">
        <div class="text-body-2 font-weight-bold">Attachment</div>
        <v-divider class="my-3"></v-divider>
        <v-row>
            <v-col xxl="8" xl="8" lg="8" md="8" cols="12">
                <v-file-input
                    accept="image/*,application/pdf"
                    prepend-icon=""
                    variant="solo-filled"
                    class="myInput"
                    show-size
                    color="primary"
                    density="compact"
                    v-model="newFile"
                >
                    <template v-slot:label>
                        <v-label slot="label" class="myLabel">
                            <span>Drop your file here or</span>&nbsp;<span><b>choose file</b> (Max 2MB)</span>
                        </v-label>
                    </template>
                </v-file-input>
            </v-col>
            <v-col>
                <Button
                    color="secondary"
                    size="large"
                    @click="onChooseFile"
                    label="Choose File"
                    dark="true"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col xxl="3" xl="3" lg="3" md="4" cols="6" v-for="(file, index) in files" class="py-1 px-1 uploadedFileContainer">
            <div class="w-100 uploadedFile py-1 px-1">
                <img :src="file.name.split('.').pop() == 'pdf' ? pdfIcon : imageIcon" class="typeIcon" />
                <span class="ml-1 text-caption poppins">{{ file.name }}</span>
                <v-btn icon="mdi-trash-can-outline" color="error" variant="text" size="x-small" @click="deleteFile(index)"></v-btn>
            </div>
            </v-col>
        </v-row>
    </div>
    <div class="w-100 mt-2 d-flex justify-end">
        <Button
            prepend-icon="mdi-content-save-outline"
            color="primary"
            label="Save"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Colors } from '../../../bspace_design_system/src/constants/constants.js'
import { useProbationStore } from '../stores/ProbationStore.js'
import { Button } from '../../../bspace_design_system/src/components.js'
import imageIcon from '../../../bspace_design_system/src/assets/imageicon.png'
import pdfIcon from '../../../bspace_design_system/src/assets/pdfIcon.png'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'
import TableRowNewData from '../components/TableRowNewData'

const store = useProbationStore()
const pageSize = ref(5)
const page = ref(1)
const totalItem = ref(0)
const totalPage = ref(1)
const newData = ref(false)
const newFile = ref([])
const files = ref([])

const { list, isLoading } = storeToRefs(store)

totalItem.value = list.value.length
totalPage.value = Math.ceil(totalItem.value / pageSize.value)

onMounted(() => {
    store.fetchData()
})

function toggleNewRow() {
    newData.value = !newData.value
}

function onChooseFile() {
    if(newFile.value.length === 0) return
    files.value = [...files.value, newFile.value[0]]
    newFile.value = []
}

function deleteFile(deletedIndex) {
    files.value = files.value.filter((item, index) => index !== deletedIndex)
}
</script>

<style>
.v-file-input.myInput .v-input__control .v-field{
    box-shadow: none !important;
}
.v-file-input.myInput .v-input__control .v-field .v-field__outline{
    border: dotted 1.4px #08A94C !important;
    border-radius: 4px;
}
.v-file-input.myInput .v-input__control .v-field .v-field__overlay{
    background-color: v-bind('Colors.primary');
}
</style>

<style scoped>
.probationBadge{
    border: solid 1px v-bind('Colors.primary');
    text-transform: none;
}
.addKpiButton{
    color: white !important;
    text-transform: none !important;
    box-shadow: none;
}
.tableHeader{
    background-color: v-bind('Colors.background') !important;
}
th{
    color: v-bind('Colors.primary') !important;
    font-weight: 600 !important;
    background-color: none;
}
td{
    color: v-bind('Colors.textActive') !important;
    font-weight: 600 !important;
}
.attachmentContainer{
    background: #FFFFFF;
    border-radius: 10px;
}
.saveButton{
    text-transform: none;
}
.myLabel span{
    color: v-bind('Colors.primary');
    font-size: 0.75rem !important;
}
.uploadedFileContainer{
    display: flex;
    align-items: center;
    min-width: 0;
}
.uploadedFile{
    display: flex;
    align-items: center;
    background-color: rgba(8, 169, 76, 0.05);
    border-radius: 5px;
    min-width: 0;
}
.uploadedFile img{
    height: 24px;
}
.uploadedFile span{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
}
.uploadedFile btn{
    flex-shrink: 0;
}
</style>
