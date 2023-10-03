<script setup>
import Gallery from './components/Gallery.vue';
import NavBar from './components/NavBar.vue';
import {RouterView} from 'vue-router';

</script>

<template>
    <nav> 
        <NavBar />
    </nav>
    <main>
        <Gallery />
    </main>
    <RouterView></RouterView>
</template>

<style scoped>
</style>
