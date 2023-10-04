<<<<<<< HEAD
<script>
import Gallery from '@/components/Gallery.vue';
import NavBar from '@/components/NavBar.vue';
=======
<script setup>
import Gallery from './components/Gallery.vue';
import NavBar from './components/NavBar.vue';
import CategoryFilter from './components/CategoryFilter.vue';
>>>>>>> c7bb6c3857412e9a1f8370d30b634ced3fa17b3a
import {RouterView} from 'vue-router';

export default {
    components: {
        RouterView,
        NavBar,
        Gallery
    }
}

</script>

<template>
    <nav> 
        <NavBar />
        <CategoryFilter />
    </nav>
    <main>
        <Gallery />
    </main>
    <RouterView></RouterView>
</template>

<style scoped>
</style>



