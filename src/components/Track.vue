<template>
    <div class="track-page">
        <div class="tracks" v-if="state.singer.tracks.length">
            <ul>
                <li v-for="track in state.singer.tracks" :key="track.id" class="track">
                    <h3>{{ track.title }}</h3>
                    <p>Год релиза: {{ track.releaseYear }}</p>
                    <p>Продолжительность: {{ track.duration }}</p>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>No tracks available.</p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';

export default {
    setup() {
        const route = useRoute();
        const state = ref({
            singer: {
                tracks: []
            }
        });

        const getTracks = async () => {
            const response = await fetch(`https://localhost:7103/api/Track/getTrack/${route.params.id}`);
            return await response.json();
        }

        onMounted(async () => {
            state.value.singer.tracks = await getTracks();
        });

        return {
            state
        }
    }
}
</script>

<style>
.track-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
}

.tracks {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 20px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.track {
    border-bottom: 1px solid #eaeaea;
    padding: 10px 0;
}

.track:last-child {
    border-bottom: none;
}

h3 {
    margin: 0 0 10px;
    font-size: 1.2em;
    color: #333;
}

p {
    margin: 0 0 5px;
    color: #666;
}

p:last-child {
    margin: 0;
}

.no-tracks {
    text-align: center;
    color: #999;
    font-size: 1em;
}
</style>
