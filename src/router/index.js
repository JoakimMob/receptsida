import {createRouter} from 'vue-router';
import RecipeView from './views/RecipeView.vue';
import RecipesView from './views/RecipesView';
import HomePage from './HomePage.vue';

const router = createRouter({
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