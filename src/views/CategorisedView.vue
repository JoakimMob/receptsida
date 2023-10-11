<script>
import Recipe from '../components/Recipe.vue';

export default {
        components: {
                Recipe
        },
        data() {
                return {
                        recipes: [],
                        categoryName: "",
                }
        },
        methods: {
                async fetchData() {
                        const response = await fetch(`https://jau22-recept-grupp5-1bixsi9xz341.reky.se/categories/${this.$route.params.categoryName}/recipes`)
                        this.recipes = await response.json();
                }
        },
        created() {
                this.$watch(
                        () => this.$route.params,
                        () => {
                                this.categoryName = this.fetchData()
                        },
                        { immediate: true }
                )
        },
        mounted() {
                this.fetchData();
        }
}

</script>
    
<template>
        <div class="gallery-list">
                <Recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </div>
</template>

<style scoped>
.gallery-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 20px auto;
        width: 80%;
}

.gallery-list a {
        text-decoration: none;
}

</style>