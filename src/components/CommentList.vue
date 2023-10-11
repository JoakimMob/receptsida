
<template>
    <!--Displaying comments with name, comment and date-->
    <div>
      <div v-for="comment in comments" :key="comment.id">
        <p><strong>{{ comment.name }}</strong></p>
        <p>{{ comment.comment }}</p>
        <p>{{ comment.date }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const comments = ref([]);
  
  // Calling API to fetch comments

  const fetchComments = async () => {
    const response = await fetch(`https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes/${this.params.id}/comments`);
    if (response.ok) {
      comments.value = await response.json();
    }
  };
  
  onMounted(fetchComments);
  </script>
  