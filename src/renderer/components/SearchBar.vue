<template>
    <el-input v-model="input" class="w-50 mb-2" placeholder="查找..." :prefix-icon="Search" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

const input = ref('');
</script>

<style lang="scss" scoped></style>