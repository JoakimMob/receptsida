<script>
export default {
        data() {
                return {
                        recipes: [],
                        categoryName: "",
                }
        },
        methods: {
                async fetchData() {
                        this.recipes = '';
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
        <div class="gallery-list" v-for="recipe in recipes">
                <router-link :to="'/recipe/' + recipe._id">
                        <li class="card">
                                <img :src="recipe.imageUrl">
                                <div class="card-info">
                                        <p>{{ recipe.title }}</p>
                                        <div class="time-ingredients">
                                                <span>
                                                        <i class="fa-regular fa-clock"></i> {{ recipe.timeInMins }} min
                                                        {{ recipe.ingredients.length }} ingredienser</span>
                                                <div class="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                </div>
                                        </div>
                                </div>
                        </li>
                </router-link>
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

.card {
    display: flex;
    background-color: #fff;
    height: 490px;
    width: 300px;
    list-style-type: none;
    border-radius: 4px;
    text-align: center;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
    overflow: hidden;
}

.card img {
    height: 320px;
    width: 100%;
    object-fit: cover;
}

.card img:hover {
    cursor: pointer;
}

.card-info {
    position: absolute;
    margin-top: 350px;
    border-radius: 3px;
    font-weight: 600;
    width: 300px;
    padding: 5px;
}

.card-info p {
    color: black;
    font-size: 20px;
    padding: 5px;
    line-height: 1.2;
}

.time-ingredients {
    width: 100%;
    font-size: 12px;
    color: black;
}

.rating {
    font-size: 16px;
}
</style>