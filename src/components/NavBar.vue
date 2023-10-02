<template>
    <div>
        <h3>{{ message }}</h3>
        <ul>
            <li v-for="item in apiData" :key="item.id"><Categories :name="item.name"/></li>
        </ul>
    </div>
</template>

<script>
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
        components: { Categories }
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

