<template>
    <div class="user-page">
        <div class="title">
            <h1>{{ state.singer.name }}</h1>
        </div>
        <div class="description">
            <p>{{ state.singer.description }}</p>
        </div>
        <div class="link">
            <a :href="state.singer.link" target="_blank">Official Website</a>
        </div>
        <div class="albums">
            <!-- Список альбомов будет добавлен позже -->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const state = ref({
    singer: {
        name: '',
        description: '',
        link: ''
    }
});

const getSinger = async () => {
    const response = await fetch(`https://localhost:7103/api/Singer/getSinger/${route.params.id}`);
    return await response.json();
}

onMounted(async () => {
    state.value.singer = await getSinger();
    console.log(state.value.singer);
});
</script>

<style>
.user-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
    text-align: center;
    margin-bottom: 20px;
}

.title h1 {
    font-size: 2.5em;
    color: #333;
}

.description {
    margin-bottom: 20px;
    font-size: 1.2em;
    line-height: 1.6;
    color: #555;
}

.link {
    text-align: center;
    margin-bottom: 20px;
}

.link a {
    font-size: 1.2em;
    color: #007bff;
    text-decoration: none;
}

.link a:hover {
    text-decoration: underline;
}

.albums {
    /* Добавить стили для альбомов позже */
}
</style>