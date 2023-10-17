<template>
    <!--input element for searching recipes with two-way bindning to the "innerSearchQuery" variable-->
    <input class="search-box"  v-model="innerSearchQuery" placeholder="Sök recept" />
    <!--container div for displaying the recipe gallery-->
    <div class="gallery-list">
        <!--loop through filteredRecipes and render each recipe using recipe component-->
        <Recipe v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
    </div>
</template>

<script setup>
//import components
import { ref, computed, onMounted } from 'vue';
import Recipe from '@/components/Recipe.vue';

const innerSearchQuery = ref(''); // reactive variable for user input
const recipes = ref([]); // initializing the variable to hold the list of all recipes fetched from api

//fetch recipes from api when component is mounted
const fetchRecipes = async () => {
    const response = await fetch('https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes');
    const data = await response.json();
    recipes.value = data;
}
onMounted(fetchRecipes);

//compute filtered recipes based on user's input
// filter by title

const filteredRecipes = computed(() => {
    if (!innerSearchQuery.value) return recipes.value;
    
    return recipes.value.filter(recipe =>
    recipe.title.toLowerCase().includes(innerSearchQuery.value.toLowerCase())
    );
});

// filter by category

/* const filteredRecipes = computed(() => { 
    if (!innerSearchQuery.value) return recipes.value;
    
    return recipes.value.filter(recipe =>
    recipe.categories.some(category =>
    category.toLowerCase().includes(innerSearchQuery.value.toLowerCase())
    )
    );
}); */

</script>

<style scoped>
.search-box {
    display: block;
    margin: 2em auto;
    width: 40%;
    height: 50px;
    padding-left: 35px;
    font-size: 18px;
    background-image: url('@/assets/magnifying_glass.webp');
    background-repeat: no-repeat;
    background-position: left center;
    border: 1px solid #ccc;
    border-radius: 25px;
    box-shadow: 0 0 4mm rgba(0, 0, 0, 0.15);
    outline: none;
}

.gallery-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 6em auto;
    width: 50%;
}
.gallery-list a {
        text-decoration: none;
}


</style>
