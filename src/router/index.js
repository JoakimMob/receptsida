import {createRouter} from 'vue-router';
import RecipeView from './views/RecipeView.vue';
import RecipesView from './views/RecipesView';

const router = createRouter({
    routes: [
        {
            path: '/', 
            component: RecipesView
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