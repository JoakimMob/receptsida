<template>
    <div class="sidebar close">
        <div class="logo-details">
            <span id=icon class="material-symbols-outlined">dinner_dining</span>
            <span class="logo_name"></span>
        </div>
        
        <ul class="nav-links">  
            <li>
            <router-link to="/">
                <i class='bx bx-home-heart'></i>
                <span class="link_name">Startsida</span>
            </router-link>
            </li>

            <li>
                <div class="icon-link" @click="toggleMenu">
                    <a href="#">
                        <i class='bx bx-category'></i>
                        <span class="link_name">Kategorier</span>
                        <i class='bx bx-chevron-down'></i>
                    </a>
                </div>
                <ul class="sub-menu" :class="{'show-sub-menu': showSubMenu}">
                    <li v-for="item in apiData" :key="item.id">
                        <router-link :to="`/category/${item.name}`" @click="makeBold(item.name)">
                            <Categories :name="item.name" :count="item.count" />
                            <span :class="getCategoryClass(item.name)"></span>
                        </router-link>
                    </li>
                </ul>
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
            categories: document.getElementsByClassName("categories"),
            showSubMenu: false,
            activeCategory: null,
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
        },
        toggleMenu() {
            this.showSubMenu = !this.showSubMenu;
        }
    },
    computed: {
        getCategoryClass(){
            return (itemName) => ({
                bolded: this.activeCategory === itemName,
            });
        },
    },
    components: { Categories, RouterLink }
}
</script>
 
<style>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 260px;
    background: #11101d;
}

.sidebar .logo-details {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
}

#icon {
    font-size: 50px;
    color: white;
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px;
}

.sidebar .logo-details .logo_name {
    font-size: 22px;
    color: white;
    font-weight: 600;

}

.sidebar .nav-links {
    height: 100%;
    padding-top: 30px;
}

.sidebar .nav-links li .icon-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.sidebar .nav-links li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
}

.sidebar .nav-links li:hover {
    background: #1d1b31;
}

.sidebar .nav-links li i {
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 30px;
}

.sidebar .nav-links li a {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.sidebar .nav-links li a .link_name {
    font-size: 18px;
    font-weight: 400;
    color: white;
}

.sidebar .nav-links li .sub-menu {
    display: none;
    padding: 6px 6px 14px 80px;
    margin-top: -10px;
    background-color: #1d1b31;
}

.sidebar .nav-links li .sub-menu.show-sub-menu {
    display: block; 
}

.sidebar .nav-links li .sub-menu a {
    color: white;
    font-size: 15px;
    padding: 5px 0;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
}

.sidebar .nav-links li .sub-menu a:hover {
    opacity: 1;
}

@media screen and (max-width: 1460px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 20px;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

.bolded {
    margin-left: -8px;
    padding: 0 8px 0 8px;
    /* border: 1px solid white; */
    border-radius: 8px;
    background: rgba(94, 93, 93, 0.664);
}


/* .sidebar.close .nav-links li .sub-menu{
    position: absolute;
    left: 100%;
    top: 0;
    margin-top: 0;
    padding: 10px 20px;
    border-radius: 0 6px 6px 0;
    transition: all 0.4s ease;
}

.sidebar .nav-links li .sub-menu .link_name{
    display: none;

}

.sidebar.close .nav-links li .sub-menu .link_name{
    font-size: 18px;
    opacity: 1;
    display: block;
} */
</style>