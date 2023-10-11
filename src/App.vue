<script>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';

export default {
    components: {
        RouterView,
        NavBar,
        Header
    }
}

</script>

<template>
    <nav>
        <Header />
        <NavBar />
    </nav>
    <RouterView></RouterView>
</template>

<style scoped></style>



