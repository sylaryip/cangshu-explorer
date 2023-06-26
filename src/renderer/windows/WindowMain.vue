<script setup lang="ts">
import fs from 'fs';
import { ref } from 'vue';

import { ipcRenderer } from 'electron';
import FileExplorer from '../components/FileExplorer.vue';
import SearchBar from '../components/SearchBar.vue';

const baseUrl = ref('/');
const dirList = ref<string[]>([]);
dirList.value = fs.readdirSync(baseUrl.value);

const handleChangeDir = async () => {
    const path = (await ipcRenderer.invoke('open-dialog')) as string[];
    baseUrl.value = path[0];

    dirList.value = fs.readdirSync(baseUrl.value);
}


const LIST = [
    {
        title: "电影",
        type: "movie",
    },
    {
        title: "书籍",
        type: "book",
    },
    {
        title: "动漫",
        type: "animate",
    }
];

const activeName = ref(LIST[0].type);

const handleSwitchCategory = (tab: unknown, event: Event) => {
}
</script>

<template>
    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleSwitchCategory" :lazy="true">
        <el-tab-pane v-for="item in LIST" :key="item.type" :label="item.title" :name="item.type">
            {{ baseUrl }} <el-button @click="handleChangeDir">打开目录</el-button>
            <div flex="~" h="12" class="justify-between items-center">
                <span flex="~" gap="2">
                    <el-tag type="success">共 {{ dirList.length }} 个</el-tag>
                </span>
                <SearchBar />
            </div>
            <FileExplorer :type="item.type" :list="dirList" />
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped></style>
