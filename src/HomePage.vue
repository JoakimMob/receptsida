<script setup>
import NavBar from './components/NavBar.vue';
import CategoryFilter from './components/CategoryFilter.vue';
import { RouterView } from 'vue-router';

</script>

<template>
    <nav>
        <NavBar />
    </nav>
    <main>
        <CategoryFilter />
    </main>
    <RouterView></RouterView>
</template>

<style scoped>
</style>



