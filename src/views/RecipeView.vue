
<template>
    <div class="RecipePage">

        <!--recipe header - display recipe title & description-->
        <div class="RecipeHeader">
            <h1>{{ recipe.title }}</h1> 
            <p>{{ recipe.description }}</p> 

            <!-- Display estimated preparation time and number of ingredients -->
            <div class="MiniInfo">
                <span id="TimeInMins"><i class="fa-regular fa-clock"></i> ca. {{ recipe.timeInMins }} min </span>
                <span id="NumberOfIngredients">{{ recipe.ingredients.length }} ingredienser</span>
            </div>
        </div>

        <!--recipe details-->
        <div class="RecipeDetails">
            <div class="RecipeInfo">
                <h2>Ingredienser:</h2> <!--ingredient section title-->
                <ul>
                    <!--iterate through recipe ingredients-->
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
                        <!--diplay ingredient amount, unit & name-->
                        <span class="ListAmount">{{ ingredient.amount }}  </span>
                        <span class="ListUnit">{{ ingredient.unit }}</span>
                        <span>{{ ingredient.name }}</span>
                    </li>
                </ul>
            </div>

            <div class="RecipeImage">
                <!--display recipe image-->
                <img :src="recipe.imageUrl" alt="Receptbild">
            </div>
        </div>

        <!--recipe instructions-->
        <div class="RecipeInstructions">
            <h2>Gör så här:</h2> <!-- instructions section title-->
            <ol>
                <!--iterate through preperation steps-->
                <li v-for="(step, index) in recipe.instructions" :key="index">{{ step }}</li>
            </ol>
        </div>

        <!--recipe rating-->
        <Rating v-model="recipe.rating"/>  <!-- Rating component -->
        <!-- <p style="text-align: center;">Betyg: {{ Math.round(recipe.avgRating) }}</p> <!--display average rating--> -->

        <!--comment form & comment list components-->
        <CommentForm />
        <CommentList />
    </div>
</template>
  
<script>
//import components 
import CommentList from '@/components/CommentList.vue';
import CommentForm from '@/components/CommentForm.vue';
import Rating from '@/components/Rating.vue';

export default {
    components: {
        //imported components registered for use in template
        CommentList,
        CommentForm,
        Rating,
    },
    data() {
        return {
            //initialize the data object
            recipe: {
                title: '',          //title of the recipe
                description: '',    //description of the recipe
                imageUrl: '',       //link to recipe image
                ingredients: [],    //list of ingredients
                instructions: [],   //list of instructions
                timeInMins: '',     //time in minutes to prepare the recipe
            },
        };
    },
    async created() {
        //the method that runs when the component is created
       
        try {
            //attempt to fetch recipe data from api using recipe's id from route params
            const response = await fetch(`https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes/${this.$route.params.id}`); 
            
            if (!response.ok) {
                //if response from api is not OK, throw an error
                throw new Error('Något gick fel vid hämtning av recept.');
            }

            //if api call is successful, convert response to JSON format
            const data = await response.json();

            //update recipe data with the result from api call
            this.recipe = data;
        } catch (error) {
            //handle any errors during recipe data retrieval
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
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .RecipeInfo {
        width: 45%; /* Adjust the width as needed */
    }

    .RecipeInfo h2 {
        font-size: 24px;
        color: #333;
        margin-top: 45px;
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

    .RecipeInfo .ListAmount {
        font-weight: bold;
        margin-right: 1px;
    }

    .RecipeInfo .ListUnit {
        font-weight: bold;
        margin-right: 10px;
    }

    .RecipeImage img {
        width: 500px;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        margin-top: 50px;
        margin-left: 50px;
    }

    @media screen and (max-width: 720px) {
        .RecipeDetails {
            flex-direction: column;
        }

        .RecipeInfo {
            width: 100%;
        }

        .RecipeImage img {
            margin-left: 0;
            width: 500px;
        }
    }

    @media screen and (max-width: 540px) {
        .RecipeImage img {
            width: 100%;
        }
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
