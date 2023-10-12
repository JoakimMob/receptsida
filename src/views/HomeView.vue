<template>
    <input class="search-box"  v-model="innerSearchQuery" placeholder="Sök efter kategori..." />
    <div class="gallery-list">
        <Recipe v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Recipe from '@/components/Recipe.vue';

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
    display: block;
    margin: auto;
    width: 50%;
    padding: 15px;
    border-radius: 25px;
    border: 1px solid #ccc;
    box-shadow: 0 0 4mm rgba(0, 0, 0, 0.15);
    outline: none;
}
.gallery-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px auto;
    width: 75%;
}
.gallery-list a {
        text-decoration: none;
}


</style>
