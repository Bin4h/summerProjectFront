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
            <h2>Выпущенные альбомы</h2>
            <div v-if="state.singer.albums.length">
                <ul>
                    <li v-for="(album, index) in state.singer.albums" :key="album.id" class="album">
                        <h3 @click="this.$router.push(`/track/${index}`)">{{ album.title }}</h3>
                        <p>Год релиза: {{ album.releaseYear }}</p>
                        <p>{{ album.description }}</p>
                    </li>
                </ul>
            </div>
            <div v-else>
                <p>No albums available.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute();
const state = ref({
    singer: {
        name: '',
        description: '',
        link: '',
        albums: []
    }
});

const getSinger = async () => {
    const response = await fetch(`https://localhost:7103/api/Singer/getSinger/${route.params.id}`);
    return await response.json();
}

onMounted(async () => {
    state.value.singer = await getSinger();
    console.log(state.value.singer);
    const isAuthorised = localStorage.getItem("isAuthorised");
    if (!isAuthorised) {
        router.push('/login');
    }
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
    margin-top: 20px;
}

.albums h2 {
    text-align: center;
    font-size: 2em;
    color: #333;
    margin-bottom: 20px;
}

.albums ul {
    list-style: none;
    padding: 0;
}

.album {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.album h3 {
    cursor: pointer;
    margin: 0 0 10px;
    font-size: 1.5em;
    color: #333;
}

.album p {
    margin: 5px 0;
    color: #666;
}
</style>