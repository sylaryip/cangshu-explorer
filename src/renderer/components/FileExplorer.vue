<template>
    <div class="wrap">
        <template v-for="item in props.list" :key="item">
            <FileItem :name="item as string" />
        </template>
    </div>
</template>

<script setup lang="ts">
import FileItem from './FileItem.vue';

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    list: {
        type: Array,
        required: true,
    }
});


</script>

<style lang="scss" scoped>
.wrap {
    display: flex;
    flex-wrap: wrap;
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    gap: 15px;
}
</style>