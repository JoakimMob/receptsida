<template>
    <div class="comment-form">
        <div v-if="!successMessage.value">
            <input class="name-input" v-model="name" placeholder="Ditt namn" :disabled="isLoading" />
            <div v-if="!name && attemptedSubmit">Var god fyll i ditt namn.</div>
            
            <textarea class="comment-textarea" v-model="comment" placeholder="Din kommentar" :disabled="isLoading"></textarea>
            <div v-if="!comment && attemptedSubmit">Var god skriv en kommentar.</div>
            
            <button @click="submitComment" :disabled="!name || !comment || isLoading">
                Skicka kommentar
            </button>
        </div>
        
        <p v-if="successMessage.value">{{ successMessage.value }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const comment = ref('');
const successMessage = ref('');
const isLoading = ref(false);  // To track when data is loading
const attemptedSubmit = ref(false);  // To track if user attempted to send

const submitComment = async () => {
    attemptedSubmit.value = true;

    if (!name.value || !comment.value) {
        return; // Prevent sending if empty fields
    }

    isLoading.value = true;

   // Sending a POST request with name and comment and awaits response
    const response = await fetch(`https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes/${this.params.id}/comments`, {
        method: 'POST',
        body: JSON.stringify({ name: name.value, comment: comment.value }),
        headers: { 'Content-Type': 'application/json' },
    });

    /*# Lägger till en kommentar för ett recept
POST {{baseUrl}}/recipes/632da30c6e7766b37d983811/comments
Content-Type: application/json */

    isLoading.value = false;

    // If successful response setting 
    // a success message and clears the name and comment fields
    if (response.ok) {
        successMessage.value = 'Tack för din kommentar!';
        name.value = '';
        comment.value = '';
    }
};
</script>

<style scoped>
.comment-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 500px;
    margin: 20px auto;
}

.name-input, .comment-textarea {
    font-family: sans-serif;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: 0 0 4mm rgba(0, 0, 0, 0.1);
    outline: none;
    font-size: 16px;
    margin-bottom: 3mm; 
}

.comment-textarea {
    resize: vertical;
    height: 150px;
}

button {
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
</style>


