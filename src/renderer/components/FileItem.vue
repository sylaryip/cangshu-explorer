<template>
    <div class="item">
        {{ name }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    }
});
</script>

<style scoped>
.item {
    display: flex;
    height: 100px;
    min-width: 100px;
    padding: 10px;
    background-color: aquamarine;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    box-sizing: border-box;
}
</style>