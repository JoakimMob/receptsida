<script >

export default {
    data() {
        return {
            recipes: [],
        }
    },
    created() {
        fetch('https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes')
            .then(response => response.json())
            .then(data => {
                this.recipes = data
                console.log(data)
            })
    },
}
</script>

<template>
    <div class="gallery-list">
        <div class="card" v-for="recipe in recipes" :key="recipe.id">
            <img :src="recipe.imageUrl">
            <div class="card-info">
                <p>{{ recipe.title }}</p>
                <div class="time-ingredients">
                    <span><i class="fa-regular fa-clock"></i> {{ recipe.timeInMins }} min
                        {{ recipe.ingredients.length }} ingredienser</span>
                    <div class="rating"><i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.gallery-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 100px;
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow: hidden;
}

.card img {
    height: 320px;
    width: 100%;
    object-fit: cover;
    transition: .5s;  
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