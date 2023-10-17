
<template>
  <div>
    <h2> Tidigare kommentarer</h2>

    <!-- Displaying previous comments -->

    <div class="comments-container">
      <div class="comment-box" v-for="comment in comments" :key="comment.id">
        <p class="comment-name"><strong>{{ comment.name }}</strong></p>
        <p class="comment-date">{{ formatCommentDateTime(comment.createdAt) }}</p>
        <p class="comment-text">{{ comment.comment }}</p>
        
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

//Format date and time
const formatCommentDateTime = (dateTime) => {
  const dateObj = new Date(dateTime);
  const formattedDate = dateObj.toLocaleDateString();
  const formattedTime = dateObj.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  return `${formattedDate} kl. ${formattedTime}`;
}

onMounted(fetchComments);
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 2em;
  font-size: 24px;
}

.comments-container {
  max-width: 700px;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.comment-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border: 3px solid white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comment-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.comment-name {
  font-weight: bold;
  font-size: 18px;
}

.comment-date {
  font-size: 0.9em;
  color: #777;
}

.comment-text {
  text-align: left;
  margin-top: 10px;
  font-size: 18px;
}
.comment-box:hover {
  background-color: #eaeaea;
  transition: background-color 0.3s ease;
}
</style>






