
<template>
    <div v-if="state.singers.length" class="singer-list">
        <SingerCard v-for="singer in state.singers" :key="singer.id" :singer="singer"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SingerCard from './SingerCard.vue';

const getSingers = (async () => {
    const response = await fetch('https://localhost:7103/api/Singer/getSingerList');
    return await response.json();
})

const state = ref({
    singers: []
});

onMounted(async () => {
    state.value.singers = await getSingers();
});
</script>

<style>
.singer-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding: 16px;
    background-color: #f5f5f5;
}
</style>