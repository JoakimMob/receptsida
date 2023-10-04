<template> 
    <div>
        <input class="search-box" v-model="innerSearchQuery" placeholder="Sök efter kategori...">
        <div class="gallery-list">
            <li class="card" v-for="recipe in filteredRecipes" :key="recipe._id">
                <img :src="recipe.imageUrl">
                <div>{{ recipe.title }}</div>
                <span><i class="fa-regular fa-clock"></i> {{ recipe.timeInMins }} min</span>
            </li>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const innerSearchQuery = ref(''); // Reactive var for user input
const recipes = ref([]); // Initializing the var to hold the list of all recipes fetched from the server

const fetchRecipes = async () => {
    const response = await fetch('https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes');
    const data = await response.json();
    recipes.value = data;
}

onMounted(fetchRecipes);

// If a search query present filtering the recipes based on the user's input
const filteredRecipes = computed(() => {
    if (!innerSearchQuery.value) return recipes.value;

    return recipes.value.filter(recipe => 
        recipe.categories.some(category => 
            category.toLowerCase().includes(innerSearchQuery.value.toLowerCase())
        )
    );
});
</script>

<style scoped>
.search-box {
    padding: 10px;
    border-radius: 5px;
    margin: 20px;
    border: 1px solid #ccc; 
    box-shadow: 0 0 4mm rgba(0, 0, 0, 0.15);
    outline: none;
}

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
