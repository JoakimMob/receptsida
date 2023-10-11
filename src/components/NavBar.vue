<template>
    <div>
        
        <ul>  
            <h2>
            <router-link to="/">Home</router-link>
            </h2>
            <h3>{{ message }}</h3>

            <li v-for="item in apiData" :key="item.id">
                <router-link :to="`/category/${item.name}`" @click="makeBold(item.name)">
                    <Categories :name="item.name" :count="item.count" />
                </router-link>
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
            message: 'Kategorier:',
            apiData: [],
            categories: document.getElementsByClassName("categories")
        };
    },
    created() {
        fetch('https://jau22-recept-grupp5-1bixsi9xz341.reky.se/categories')
            .then(response => response.json())
            .then(data => { this.apiData = data; })
            .catch(error => {
                console.error('An error occured: ', error);
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
    color: rgb(12, 12, 12);
    font-style: italic;
    font-size: medium;

}
ul {
    padding: 70px 50px;
    /* background-color: #9bb979; */
    color: white;
    position: absolute;
    top: 0;
    left: -300px;
    width: 200px;
    height: 100vh;
    z-index: 1; 
    left: 0;
}
</style>




