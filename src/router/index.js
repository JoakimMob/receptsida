import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RecipeView from '@/views/RecipeView.vue';
import CategorisedView from '@/views/CategorisedView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: HomeView     //route for the home view
        },
        {
            path: '/recipe/:id',
            name: 'recipe',
            component: RecipeView   //route for individual recipe view
        },
        {
            path: '/category/:categoryName',
            name: 'category',
            component: CategorisedView  //route for categorised recipe view
        }
    ]
})

export default router;