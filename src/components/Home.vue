
<template>
    <h1>Hello</h1>
</template>

<script>
fetch('https://localhost:7103/api/Singer/getSingerList')
    .then(res => console.log(res.json()))

console.log(1)
</script>