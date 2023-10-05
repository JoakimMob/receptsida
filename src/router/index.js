import {createRouter, createWebHistory} from 'vue-router';
import RecipeView from '@/views/RecipeView.vue';
import RecipesView from '@/views/RecipesView.vue';
import HomePage from '@/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: HomePage
        },
        {
            path: '/recipe/:id',
            component: RecipeView
        },
        {
            path: '/category/:id',
            component: RecipesView
        }
    ]
})

export default router;