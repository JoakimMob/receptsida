<template>
  <div>
    <h2> Tidigare kommentarer</h2>

    <!-- Displaying previous comments -->

    <div class="comments-container">
      <div class="comment-box" v-for="comment in comments" :key="comment.id">
        <p class="comment-name"><strong>{{ comment.name }}</strong></p>
        <p class="comment-text">{{ comment.comment }}</p>
        <p class="comment-date">{{ comment.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const comments = ref([]);

const id = route.params.id;

// Fetching previous comments

const fetchComments = async () => {
  const url = `https://jau22-recept-grupp5-1bixsi9xz341.reky.se/recipes/${id}/comments`;
  const response = await fetch(url);
  if (response.ok) {
    comments.value = await response.json();
  }
};

onMounted(fetchComments);
</script>

<style scoped>
h2 {
    text-align: center;
    margin-top:125px;
}

.comments-container {
    max-width: 500px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top:30px;
}

.comment-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.comment-name {
    margin-bottom: 10px;
}

.comment-text {
    text-align: center;
    margin-bottom: 10px;
}

.comment-date {
    font-size: 0.8em;
    color: #777;
}
</style>