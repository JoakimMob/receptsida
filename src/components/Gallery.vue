<script>

export default {
    props: {
        recipes: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}

</script>

<template>
    <div class="gallery-list">
        <li class="card" v-for="recipe in recipes" :key="recipe._id">
            <img :src="recipe.imageUrl">
            <div>{{ recipe.title }}</div>
            <span><i class="fa-regular fa-clock"></i> {{ recipe.timeInMins }} min</span>
        </li>
    </div>
</template>


<style>
.gallery-list {
    padding: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}

.card {
    background-color: #fff;
    list-style-type: none;
    border: 1px solid black;
    min-width: 250px;
    max-width: 350px;
    max-height: 300px;
    border-radius: 3px;
    text-align: center;
    font-size: 1rem;
}

.card img {
    margin: 8px auto;
    height: 220px;
    width: 95%;
}
</style>