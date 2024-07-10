<template>
    <div class="card">
        <h2 class="card-title">{{ singer.name }}</h2>
        <p class="card-description">{{ singer.description }}</p>
    </div>
</template>

<script>
    export default{
        props: {
            singer: {
                type: Object,
                required: true,
            }
        },
    }
</script>

<style>
.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-8px);
}

.card-title {
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
}

.card-description {
    font-size: 14px;
    color: #666;
}
</style>