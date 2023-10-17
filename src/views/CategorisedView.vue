<template>
        <div class="gallery-list">
                <!--loop through and display recipes-->
                <Recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </div>
</template>

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
                //asynchronously fetch recipes based on the selected category
                async fetchData() {
                        const response = await fetch(`https://jau22-recept-grupp5-1bixsi9xz341.reky.se/categories/${this.$route.params.categoryName}/recipes`)
                        this.recipes = await response.json();
                }
        },
        created() {
                //watch for changes in route parameters and immediately trigger data fetching
                this.$watch(
                        () => this.$route.params,
                        () => {
                                this.categoryName = this.fetchData()
                        },
                        { immediate: true }
                )
        },
        mounted() {
                //fetch data when the component is mounted
                this.fetchData();
        }
}

</script>
    


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