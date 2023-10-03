<template>
    <RouterLink to="/">Go to Home</RouterLink>
    <div>
        <h3>{{ message }}</h3>
        <i class="fa-solid fa-bars"></i>
        <ul>
            <li v-for="item in apiData" :key="item.id"><Categories :name="item.name"/></li>
        </ul>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Categories from './Categories.vue';

export default {
    data() {
        return {
            message: 'menyrackare',
            apiData: [],
        };
    },
    created() {
        fetch('https://jau22-recept-grupp5-1bixsi9xz341.reky.se/categories')
            .then(response => response.json())
            .then(data => {this.apiData = data; })
            .catch(error => { console.error('An error occured: ',error);
        });
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

