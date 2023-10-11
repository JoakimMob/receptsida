<script>
import NavBar from '@/components/NavBar.vue';
import CategoryFilter from '@/components/CategoryFilter.vue';
import {RouterView} from 'vue-router';
import CommentForm from '@/components/CommentForm.vue';
import CommentList from '@/components/CommentList.vue';

export default {
    components: {
        RouterView,
        NavBar,
        CategoryFilter,
        CommentForm,       
        CommentList 
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
    <!-- <RouterView></RouterView> -->
</template>

<style scoped>
</style>



