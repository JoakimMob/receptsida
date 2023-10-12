import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RecipeView from '@/views/RecipeView.vue';
import CategorisedView from '@/views/CategorisedView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: HomeView
        },
        {
            path: '/recipe/:id',
            name: 'recipe',
            component: RecipeView
        },
        {
            path: '/category/:categoryName',
            name: 'category',
            component: CategorisedView
        }
    ]
})

export default router;