<<<<<<< HEAD
<script>
import Gallery from '@/components/Gallery.vue';
import NavBar from '@/components/NavBar.vue';
import CategoryFilter from '@/components/CategoryFilter.vue';
import {RouterView} from 'vue-router';
=======
<script setup>
import NavBar from './components/NavBar.vue';
import CategoryFilter from './components/CategoryFilter.vue';
import { RouterView } from 'vue-router';
>>>>>>> 8500029d3cbd567d1fe43b32d1e53276a3cf8ca0

export default {
    components: {
        RouterView,
        NavBar,
        Gallery,
        CategoryFilter
    }
}

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



