<template>
    <div class="rating-wrapper">
        <p v-if="!ratingSent">Vad tyckte du om receptet?</p> <!--- This message will appear when the user has not rated the recipe -->
        <ul v-if="!ratingSent"> 
            <li v-for="index in 5" :key="index" :class="{ 'selected': index <= rating }" @click="setRating(index)"> 
                &#9733;
            </li>
        </ul>
        <p v-else class="thanks-msg">Tack för ditt betyg!</p>   <!--- This message will appear when the user has rated the recipe -->
    </div>
</template>
  
<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0,   // Default value if no rating is set
        },
    },
    data() {
        return {
            rating: this.value,   // Sets the rating to the default value
            ratingSent: false,   //Default value for the message
        };
    },
    methods: {
        async setRating(rating) {
            this.rating = rating;   // Sets the rating to the value that the user clicked on
            this.$emit('update:rating', rating);    // Sends the rating to the parent component in RecipeView

            try {
                const postRating = { rating: this.rating };

                const response =
                    await fetch(`https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes/${this.$route.params.id}/ratings`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(postRating),
                        });

                if (response.ok) {
                    this.ratingSent = true;  // If the rating is posted, the message will appear
                } else {
                    console.error('Failed to post rating');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },
    },
};
</script>
  
<style scoped>
.rating-wrapper {
    margin: 40px auto 0;
    width: 50%;
    font-size: 26px;
    text-align: center;
    cursor: pointer;
}

.rating-wrapper ul {
    list-style-type: none;
}

.rating-wrapper li {
    display: inline-block;
    font-size: 50px;
    line-height: 1;
}

.selected {
    color: rgb(238, 180, 5);
}

.thanks-msg {
    margin-top: 30px;
    text-align: center;
    font-size: 26px;
}

@media screen and (max-width: 460px) {

    .rating-wrapper {
        width: 100%;
        font-size: 24px;
    }

    .rating-wrapper li {
        margin-top: 10px;
        font-size: 35px;
    }
}

</style>