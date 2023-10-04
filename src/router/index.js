<<<<<<< HEAD
import {createRouter, createWebHistory} from 'vue-router';
import RecipeView from '@/views/RecipeView.vue';
import RecipesView from '@/views/RecipesView.vue';

=======
import {createRouter} from 'vue-router';
import RecipeView from './views/RecipeView.vue';
import RecipesView from './views/RecipesView';
import HomePage from './HomePage.vue';
>>>>>>> c7bb6c3857412e9a1f8370d30b634ced3fa17b3a

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