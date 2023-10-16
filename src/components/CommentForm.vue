<template>

    <!-- Form for leaving a comment -->

    <h2>Lämna en kommentar!</h2>
    <div class="container">
        <div class="comment-form">
   
            <template v-if="isSubmittedSuccessfully">
                <p class="submit-success-msg">Tack för din kommentar!</p>
            </template>

            <template v-else>
                <div v-if="!name && attemptedSubmit">Var god fyll i ditt namn.</div>
                <input class="name-input" v-model="name" placeholder="Ditt namn" :disabled="isLoading" />
                
                <div v-if="!comment && attemptedSubmit">Var god skriv en kommentar.</div>
                <textarea class="comment-textarea" v-model="comment" placeholder="Din kommentar" :disabled="isLoading"></textarea>
                
                <button @click="submitComment" :disabled="isLoading">
                    Skicka kommentar
                </button>

                <p v-if="successMessage.value">{{ successMessage.value }}</p>
            </template>
        </div>
    </div>
</template>




<script setup>

// Functionality for comment submission

import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const name = ref('');
const comment = ref('');
const successMessage = ref('');
const isLoading = ref(false);
const attemptedSubmit = ref(false);
const isSubmittedSuccessfully = ref(false);

const submitComment = async () => {
    attemptedSubmit.value = true;

    if (!name.value || !comment.value) {
        return;
    }

    isLoading.value = true;

    const response = await fetch(`https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes/${route.params.id}/comments`, {
        method: 'POST',
        body: JSON.stringify({ name: name.value, comment: comment.value }),
        headers: { 'Content-Type': 'application/json' },
    });

    isLoading.value = false;

    if (response.ok) {
        isSubmittedSuccessfully.value = true;
    } else {
        const responseData = await response.json();
        successMessage.value = responseData.message || 'Något gick fel. Försök igen senare.';
    }
};
</script>







<style scoped>

*{
    font-family: sans-serif;
}
h2 {
    text-align: center;
    margin: 30px;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:relative;
}


.comment-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 700px;
    width: 100%;
    padding: 20px;
    background-color: #f7f7f7;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
}

.name-input,
.comment-textarea {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.2s;
    margin-bottom: 10px;
}

.comment-textarea{
    min-height: 50px;
    height: 200px;
    resize: vertical;
}

.name-input:focus,
.comment-textarea:focus {
    border-color: #007BFF;
}

button {
    align-self: center;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #0056b3;
}

button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.submit-success-msg {
  text-align: center;
  font-size: 24px; 
  font-weight: bold;
}

</style>
