<template>
    <header>
    <router-link to="/">Home</router-link>
    <br>
    <router-link to="/category/:name">Recipes View</router-link>
    </header>
    <div>
        <ul>
            <li v-for="item in apiData" :key="item.id">
                <RouterLink :to="`/category/:${item.name}`" @click="makeBold(item.name)">
                <Categories :name="item.name" :count="item.count"/>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Categories from './Categories.vue';

export default {
    data() {
        return {
            apiData: [],
            categories: document.getElementsByClassName("categories")
        };
    },
    created() {
        fetch('https://jau22-recept-grupp5-1bixsi9xz341.reky.se/categories')
            .then(response => response.json())
            .then(data => {this.apiData = data; })
            .catch(error => { console.error('An error occured: ',error);
        });
    },
    methods: {
        makeBold(selectedCategory) {
            for (const element of this.categories) {
                element.classList.remove("bolded")
            }
            let currentCategory = document.getElementById(selectedCategory)
            currentCategory.classList.add("bolded")
        }
    },
        components: { Categories, RouterLink }
}
</script>



<style scoped>
:root {
    grid-column: 1/3;
    grid-row: 2;
}

h3 {
    color: blue
}
</style>




