<script>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';

export default {
    components: {
        RouterView,
        NavBar
    }
}

</script>

<template>
    <nav>
        <NavBar />
    </nav>
    <RouterView></RouterView>
</template>

<style scoped></style>



