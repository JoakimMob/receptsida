
<template>
    <div class="RecipePage">
        <div class="RecipeHeader">
            <h1>{{ recipe.title }}</h1>
            <p>{{ recipe.description }}</p>
            <div class="MiniInfo">
                <span id="TimeInMins"><i class="fa-regular fa-clock"></i> ca. {{ recipe.timeInMins }} min </span>
                <span id="NumberOfIngredients">{{ recipe.ingredients.length }} ingredienser</span>
            </div>
        </div>

        <div class="RecipeDetails">
            <div class="RecipeImage">
                <img :src="recipe.imageUrl" alt="Receptbild">
            </div>
            <div class="RecipeInfo">
                <h2>Ingredienser:</h2>
                <ul>
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
                        <span class="ListAmount">{{ ingredient.amount }}  </span>
                        <span class="ListUnit">{{ ingredient.unit }}</span>
                        <span>{{ ingredient.name }}</span>
                    </li>

                </ul>
            </div>
        </div>

        <div class="RecipeInstructions">
            <h2>Gör så här:</h2>
            <ol>
                <li v-for="(step, index) in recipe.instructions" :key="index">{{ step }}</li>
            </ol>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            recipe: {
                title: '',
                description: '',
                imageUrl: '',
                ingredients: [],
                instructions: [],
                timeInMins: '',
            },
        };
    },
    async created() {

        try {
            const response = await fetch(`https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes/${this.$route.params.id}`); 
            if (!response.ok) {
                throw new Error('Något gick fel vid hämtning av recept.');
            }
            const data = await response.json();
            this.recipe = data;
        } catch (error) {
            console.error('Fel vid hämtning av recept:', error);
        }
    },
};
</script>
  
<style scoped>
.RecipePage {
    max-width: 800px;
    margin: 0 auto 100px;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    border-radius: 10px;
}

.RecipeHeader {
    text-align: center;
    margin: 20px;
}

.RecipeHeader h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
}

.RecipeHeader p {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
}

.MiniInfo {
    display: inline-block;
    background-color: #c0c7bd67;
    border-radius: 10px;
}

#TimeInMins {
    font-size: larger;
    display: inline-block;
    padding: 10px;
    font-weight: bold;

}

#NumberOfIngredients {
    font-size: larger;
    display: inline-block;
    padding: 10px;
    font-weight: bold;
}

.RecipeDetails {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 20px;
}

.RecipeImage img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-top: 50px;
}

.RecipeInfo {
    margin-right: 20px;
}

.RecipeInfo span {
    font-size: 16px;
    color: #666;
}

.RecipeInfo div {
    font-size: 16px;
    color: #666;
    margin-top: 5px;
}

.RecipeInfo h2 {
    font-size: 24px;
    color: #333;
    margin-top: 15px;
}

.RecipeInfo ul {
    list-style-type: none;
    padding: 0;
}

.RecipeInfo ul li {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
}
.ListAmount {
    font-weight: bold;
    margin-right: 1px;
}

.ListUnit {
    font-weight: bold;
    margin-right: 10px;
}

.RecipeInstructions h2 {
    font-size: 24px;
    color: #333;
    margin-top: 20px;
}

.RecipeInstructions ol {
    list-style-type: decimal;
    margin-left: 20px;
    padding: 0;
}

.RecipeInstructions ol li {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
}
</style>
