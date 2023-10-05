import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RecipeView from '@/views/RecipeView.vue';
import RecipesView from '@/views/RecipesView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: HomeView
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