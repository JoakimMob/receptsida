<script setup>
import { ref, computed, onMounted } from 'vue';
import Gallery from './components/Gallery.vue';

const searchQuery = ref(''); // Reaktiv referens för användarens sökfråga

const recipes = ref([]); // Reaktiv referens för alla recept

const fetchRecipes = async () => {
    const response = await fetch('https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes');
    const data = await response.json();
    recipes.value = data;
}

onMounted(fetchRecipes);

// Filtrera recepten baserat på användarens sökfråga
const filteredRecipes = computed(() => {
    if (!searchQuery.value) return recipes.value;

    return recipes.value.filter(recipe => 
        recipe.categories.some(category => 
            category.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    );
});

</script>

<template>
    <input class="search-box" v-model="searchQuery" placeholder="Sök efter kategori...">
    <Gallery :recipes="filteredRecipes" />
</template>

<style scoped>
  .search-box {
    padding: 10px;
    border-radius: 5px;
    margin: 20px;
    border: 1px solid #ccc; 
    box-shadow: 0 0 4mm rgba(0, 0, 0, 0.15);
    outline: none;
}

</style>
