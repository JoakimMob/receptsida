<script>
import Gallery from '@/components/Gallery.vue';
import NavBar from '@/components/NavBar.vue';
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
    </nav>
    <main>
        <Gallery />
    </main>
    <RouterView></RouterView>
</template>

<style scoped>
</style>
