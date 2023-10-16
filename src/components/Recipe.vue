<template>
    <router-link :to="'/recipe/' + recipe._id">
        <li class="card">
            <img :src="recipe.imageUrl">
            <div class="card-info">
                <p>{{ recipe.title }}</p>
                <div class="rating">
                   <span>Betyg {{ recipe.avgRating }}/5</span>
                </div>
                <div class="time-ingredients">
                    <span>
                        <i class="fa-regular fa-clock"></i> {{ recipe.timeInMins }} min
                        {{ recipe.ingredients.length }} ingredienser</span>
                </div>
            </div>
        </li>
    </router-link>
</template>

<script>
export default {
    props: {
        recipe: Object
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-wrap: wrap;
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
    border-radius: 3px;
    font-weight: 600;
    width: 300px;
    padding: 5px;
}


.card-info p {
    color: #535e5e;
    font-size: 20px;
    padding: 5px;
    line-height: 1.2;
}

.time-ingredients {
    width: 100%;
    font-size: 12px;
    color: #535e5e;
}

.rating {
    font-size: 16px;
} 
</style>